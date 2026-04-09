'use client';

import { useState, useEffect } from 'react';
import { fetchScanLogsAction } from './actions';
import { format } from 'date-fns';
import { Activity, Clock, MapPin, User, ChevronRight } from 'lucide-react';

export function ScanLogsTab() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const data = await fetchScanLogsAction();
      setLogs(data || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLogs();
    
    // Optional: poll every 10 seconds for real-time feel
    const interval = setInterval(fetchLogs, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400" /> Master Scan Logs
          </h2>
          <p className="text-zinc-400 text-sm mt-1">Live feed of all check-in activities across checkpoints.</p>
        </div>
        <button onClick={fetchLogs} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-sm text-white transition">
          Refresh Feed
        </button>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-zinc-950/50 border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Timestamp</th>
              <th className="px-6 py-4 font-medium">Delegate</th>
              <th className="px-6 py-4 font-medium">Allocation</th>
              <th className="px-6 py-4 font-medium">Checkpoint</th>
              <th className="px-6 py-4 font-medium">Scanned By</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {loading && logs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">Loading Live Feed...</td>
              </tr>
            ) : (!logs || logs.length === 0) ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">No scan activity found.</td>
              </tr>
            ) : (
              logs.map(log => (
                <tr key={log.id} className="hover:bg-zinc-800/30 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-start gap-2 text-zinc-300">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {format(new Date(log.scanned_at), 'hh:mm:ss a')}
                      <span className="text-[10px] text-zinc-500">{format(new Date(log.scanned_at), 'MMM dd')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{log.delegate?.full_name || 'Deleted Record...'}</div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-300 font-medium">{log.delegate?.committee || 'Unknown'}</span>
                      <ChevronRight className="w-3 h-3 text-zinc-600" />
                      <span>{log.delegate?.country || 'Unknown'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold capitalize tracking-wide">
                      <MapPin className="w-3 h-3" /> Day {log.day} - {log.checkpoint}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400">
                    <div className="flex items-center gap-2">
                       <User className="w-3 h-3" />
                       {log.scanned_by?.full_name || 'System'}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}