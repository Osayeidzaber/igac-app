'use server';

import { getServiceSupabase } from '@/lib/supabase';
import { cookies } from 'next/headers';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('crm_session');
  if (!token || token.value !== 'authenticated') {
    throw new Error('Unauthorized access');
  }
}

export async function fetchDelegatesAction() {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegates')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Fetch error:', error);
    throw new Error(error.message);
  }
  return data;
}

export async function addDelegateAction(delegateData: any) {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegates')
    .insert([delegateData])
    .select()
    .single();

  if (error) {
    console.error('Insert error:', error);
    throw new Error(error.message);
  }
  return data;
}

export async function addDelegatesBatchAction(delegatesData: any[]) {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegates')
    .insert(delegatesData);

  if (error) {
    console.error('Batch insert error:', error);
    throw new Error(error.message);
  }
  return data;
}

export async function editDelegateAction(id: string, updates: any) {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegates')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Update error:', error);
    throw new Error(error.message);
  }
  return data;
}

export async function fetchDelegateCheckinsAction(delegateId: string) {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegate_checkins')
    .select(`
      *,
      scanned_by:scanned_by_id ( full_name )
    `)
    .eq('delegate_id', delegateId)
    .order('scanned_at', { ascending: false });

  if (error) {
    console.error('Fetch checkins error:', error);
    throw new Error(error.message);
  }
  return data;
}

export async function editDelegateCheckinAction(id: string, updates: any) {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegate_checkins')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Update checkin error:', error);
    throw new Error(error.message);
  }
  return data;
}

export async function deleteDelegateCheckinAction(id: string) {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { error } = await supabase
    .from('delegate_checkins')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Delete checkin error:', error);
    throw new Error(error.message);
  }
  return true;
}

export async function fetchScanLogsAction() {
  await checkAuth();
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from('delegate_checkins')
    .select(`
      id, scanned_at, checkpoint, day,
      delegate:delegate_id ( full_name, committee, country ),
      scanned_by:scanned_by_id ( full_name )
    `)
    .order('scanned_at', { ascending: false })
    .limit(200);

  if (error) throw new Error(error.message);
  return data;
}

export async function fetchCommitteesProgressAction() {
  await checkAuth();
  const supabase = getServiceSupabase();
  
  // Get all delegates to group by committee
  const { data: delegates, error: delError } = await supabase
    .from('delegates')
    .select('*');

  if (delError) throw new Error(delError.message);

  // Get all unique checkins for "day 1 registration" (to see who entered today).
  // Ideally, just get all checkins and process in memory for flexibility.
  const { data: checkins, error: chkError } = await supabase
    .from('delegate_checkins')
    .select('*, scanned_by:scanned_by_id(full_name)');

  if (chkError) throw new Error(chkError.message);

  return { delegates, checkins };
}
