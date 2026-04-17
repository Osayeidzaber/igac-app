import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/session';

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get('crm_session');

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  if (session.value === 'authenticated') {
    return NextResponse.json({ authenticated: true });
  }

  const payload = await verifySessionToken(session.value);
  if (payload) {
    return NextResponse.json({ authenticated: true, role: payload.role });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
