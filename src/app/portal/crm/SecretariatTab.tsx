'use client';

import { useState, useEffect } from 'react';
import { UserPlus, Loader2, CheckCircle2, ShieldAlert, Activity, Edit2, Trash2 } from 'lucide-react';
import { createSecretariatAccountAction, fetchSecretariatsAction, updateSecretariatAccountAction, deleteSecretariatAccountAction } from './actions';

export function SecretariatTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [secretariats, setSecretariats] = useState<any[]>([]);
  
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadMembers();
  }, []);

  async function loadMembers() {
    setIsFetching(true);
    try {
      const data = await fetchSecretariatsAction();
      setSecretariats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      if (editingId) {
        await updateSecretariatAccountAction(editingId, formData);
        setMessage({ type: 'success', text: 'Account updated successfully!' });
        setEditingId(null);
      } else {
        await createSecretariatAccountAction(formData);
        setMessage({ type: 'success', text: 'Account created successfully!' });
      }
      (e.target as HTMLFormElement).reset();
      await loadMembers(); // refresh list
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to process request' });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Are you sure you want to permanently delete ${name}?`)) return;
    
    setIsLoading(true);
    setMessage(null);
    try {
      await deleteSecretariatAccountAction(id);
      setMessage({ type: 'success', text: 'Account deleted successfully!' });
      if (editingId === id) setEditingId(null);
      await loadMembers();
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to delete account' });
    } finally {
      setIsLoading(false);
    }
  }

  function startEdit(sec: any) {
    setEditingId(sec.id);
    setMessage(null);
    setTimeout(() => {
      // Find form inputs by name instead of refs to be quick
      const form = document.getElementById('secretariat-form') as HTMLFormElement;
      if (form) {
        (form.elements.namedItem('fullName') as HTMLInputElement).value = sec.full_name || '';
        // Note: we might not know their exact auth email as taking it from auth.users requires elevated pull,
        // but for editing scenarios often it's preferable they type their new one, or we show 'Enter new details'
      }
    }, 50);
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Secretariat Operations</h2>
          <p className="text-sm text-zinc-400">Manage portal access and view individual scanner metrics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {/* Left Col - Create Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-zinc-100 flex items-center gap-2">
            {editingId ? <Edit2 className="w-5 h-5 text-blue-500" /> : <UserPlus className="w-5 h-5 text-yellow-500" />}
            {editingId ? 'Edit Member Account' : 'New Member Account'}
          </h3>
          
          {message && (
            <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 border ${
              message.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
            }`}>
              {message.type === 'success' && <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />}
              <div className="text-sm font-medium">{message.text}</div>
            </div>
          )}

          <form id="secretariat-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                required
                placeholder="e.g. Jane Doe"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="jane.doe@igac.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                {editingId ? 'New Password (Optional)' : 'Password'}
              </label>
              <input 
                type="password" 
                name="password"
                required={!editingId}
                minLength={6}
                placeholder={editingId ? "Leave blank to keep current" : "Must be at least 6 characters"}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all text-sm"
              />
            </div>

            <div className="flex gap-3 mt-4">
              {editingId && (
                <button 
                  type="button" 
                  onClick={() => {
                    setEditingId(null);
                    setMessage(null);
                    (document.getElementById('secretariat-form') as HTMLFormElement)?.reset();
                  }}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold py-3.5 px-4 rounded-xl transition-all"
                >
                  Cancel
                </button>
              )}
              <button 
                type="submit" 
                disabled={isLoading}
                className={`flex-1 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${
                  editingId ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'bg-yellow-500 hover:bg-yellow-400 text-yellow-950 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]'
                }`}
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" /> : editingId ? <Edit2 className="w-5 h-5 flex-shrink-0" /> : <UserPlus className="w-5 h-5 flex-shrink-0" />}
                {isLoading ? (editingId ? 'Updating...' : 'Deploying Access...') : (editingId ? 'Update Account' : 'Deploy Access')}
              </button>
            </div>
          </form>
        </div>

        {/* Right Col - List & Stats */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg flex flex-col h-full min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-blue-400" />
              Active Roster
            </h3>
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest bg-zinc-800 px-3 py-1 rounded-full">{secretariats.length} Members</span>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-3 custom-scrollbar">
            {isFetching ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-3">
                <Loader2 className="w-6 h-6 animate-spin text-zinc-600" />
                <span className="text-sm font-medium">Fetching roster...</span>
              </div>
            ) : secretariats.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 text-sm font-medium border-2 border-dashed border-zinc-800 rounded-xl p-6">
                No secretariat members found.
              </div>
            ) : (
              secretariats.map((sec) => (
                <div key={sec.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors group relative overflow-hidden">
                  {/* subtle internal glow */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex flex-shrink-0 items-center justify-center text-blue-400 font-bold shadow-inner uppercase">
                      {sec.full_name.charAt(0)}{sec.full_name.split(' ')[1]?.[0] || ''}
                    </div>
                    <div>
                      <h4 className="font-bold text-white leading-tight mb-1">{sec.full_name}</h4>
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                        <span>User Role</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                        <span className="text-blue-400">{sec.role || 'Terminal'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6 bg-zinc-900 sm:bg-transparent p-3 sm:p-0 rounded-lg border border-zinc-800 sm:border-none ml-14 sm:ml-0 relative z-10">
                    <div className="flex flex-col items-start sm:items-end mr-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Check-ins Logged</span>
                      <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md border border-emerald-500/20 shadow-[inset_0_0_10px_rgba(16,185,129,0.1)]">
                        <Activity className="w-3.5 h-3.5" />
                        <span className="font-mono font-bold text-sm tracking-wider">{sec.scan_count || 0}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => startEdit(sec)}
                        className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 p-2 rounded-lg border border-blue-500/20 transition-colors"
                        title="Edit Account"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(sec.id, sec.full_name)}
                        className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 p-2 rounded-lg border border-rose-500/20 transition-colors"
                        title="Delete Account"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}