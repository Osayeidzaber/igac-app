'use client';

import { useState } from 'react';
import Papa from 'papaparse';
import { UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react';
import { addDelegatesBatchAction } from './actions';

export function IngestionTab() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [stats, setStats] = useState<{ total: number; success: number; failed: number } | null>(null);

  const processCsv = (file: File) => {
    setLoading(true);
    setMessage(null);
    setStats(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const rows = results.data as any[];
        const batchToInsert = [];
        let failCount = 0;

        // Prepare the batch
        for (const row of rows) {
          const targetName = row.full_name || row.Name || row['Full Name'];
          const targetEmail = row.email || row.Email;
          const targetCountry = row.country || row.Country || null;
          const targetCommittee = row.committee || row.Committee || null;

          if (!targetName || !targetEmail) {
            failCount++;
            continue;
          }

          const qrToken = `DEL-${Math.random().toString(36).substr(2, 9).toUpperCase()}-${Date.now()}`;
          batchToInsert.push({
            full_name: targetName.trim(),
            email: targetEmail.trim().toLowerCase(),
            country: targetCountry?.trim() || null,
            committee: targetCommittee?.trim() || null,
            qr_token: qrToken,
            mail_status: 'PENDING'
          });
        }

        try {
          if (batchToInsert.length > 0) {
            await addDelegatesBatchAction(batchToInsert);
          }
          
          setStats({ total: rows.length, success: batchToInsert.length, failed: failCount });
          setMessage({
            type: batchToInsert.length > 0 ? 'success' : 'error',
            text: `Ingestion complete! Successfully added ${batchToInsert.length} out of ${rows.length} delegates.`,
          });
        } catch (err: any) {
          console.error(err);
          setMessage({ type: 'error', text: `Database insertion failed: ${err.message}` });
        }
        
        setLoading(false);
      },
      error: (error) => {
        setMessage({ type: 'error', text: `Failed to parse CSV: ${error.message}` });
        setLoading(false);
      },
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processCsv(file);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-2xl px-2">
      <h2 className="text-xl font-semibold">CSV Delegate Ingestion</h2>
      <p className="text-sm text-zinc-400">
        Upload a standard CSV file. The file must contain headers: <code>full_name</code>, <code>email</code>. Optional: <code>country</code>, <code>committee</code>.
      </p>

      <div className="bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 hover:border-zinc-700 transition">
        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
          <UploadCloud className="w-6 h-6 text-zinc-400" />
        </div>
        <div>
          <label className="cursor-pointer text-sm font-medium text-white px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition rounded-md border border-zinc-700 inline-block">
            {loading ? 'Processing Document...' : 'Select CSV File'}
            <input 
              type="file" 
              accept=".csv" 
              onChange={handleFileUpload} 
              className="hidden" 
              disabled={loading}
            />
          </label>
        </div>
        <p className="text-xs text-zinc-500">Drag and drop functionality can be used natively with the select button.</p>
      </div>

      {message && (
        <div className={`p-4 rounded-lg flex items-start gap-3 border ${message.type === 'success' ? 'bg-emerald-950/30 border-emerald-900 text-emerald-400' : 'bg-red-950/30 border-red-900 text-red-400'}`}>
          {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          <div>
            <p className="font-medium text-sm">{message.text}</p>
            {stats && (
              <ul className="mt-2 text-xs opacity-80 list-disc list-inside px-2">
                <li>Total rows parsed: {stats.total}</li>
                <li>Successfully inserted: {stats.success}</li>
                <li>Failed rows (missing name/email or DB constraint): {stats.failed}</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
