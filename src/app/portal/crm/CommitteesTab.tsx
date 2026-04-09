"use client";

import { useState, useEffect } from "react";
import { fetchCommitteesProgressAction } from "./actions";
import {
  Users,
  PieChart,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Search,
} from "lucide-react";
import { DelegateProfileModal } from "./DelegateProfileModal";

export function CommitteesTab() {
  const [committees, setCommittees] = useState<
    { name: string; count: number; checkedIn: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // New States for Task 2.4 Refinement
  const [rawDelegates, setRawDelegates] = useState<any[]>([]);
  const [rawCheckins, setRawCheckins] = useState<any[]>([]);

  // Navigation states
  const [activeCommittee, setActiveCommittee] = useState<string | null>(null);
  const [selectedDelegate, setSelectedDelegate] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchCommitteesProgressAction();
      if (data) {
        const { delegates, checkins } = data;
        setRawDelegates(delegates);
        setRawCheckins(checkins);

        // Group by committee
        const cMap = new Map<
          string,
          { count: number; checkedInSet: Set<string> }
        >();

        delegates.forEach((d: any) => {
          const cName = d.committee || "Unallocated";
          if (!cMap.has(cName)) {
            cMap.set(cName, { count: 0, checkedInSet: new Set() });
          }
          cMap.get(cName)!.count++;
        });

        // Map checkins
        checkins.forEach((c: any) => {
          // Find delegate's committee
          const del = delegates.find((d: any) => d.id === c.delegate_id);
          if (del) {
            const cName = del.committee || "Unallocated";
            cMap.get(cName)?.checkedInSet.add(c.delegate_id);
          }
        });

        const arr = Array.from(cMap.entries())
          .map(([name, val]) => ({
            name,
            count: val.count,
            checkedIn: val.checkedInSet.size,
          }))
          .sort((a, b) => b.count - a.count);

        setCommittees(arr);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // When a committee is clicked, it shows the details
  if (activeCommittee) {
    const committeeDelegates = rawDelegates.filter(
      (d) => (d.committee || "Unallocated") === activeCommittee &&
        (d.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
         d.email.toLowerCase().includes(searchQuery.toLowerCase())),
    );

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => {
                setActiveCommittee(null);
                setSearchQuery("");
              }}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition mb-2 py-1 px-2 -ml-2 rounded-md hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Overview
            </button>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-sky-400" /> {activeCommittee}
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Viewing delegates allocated to this group.
            </p>
          </div>
          
          <div className="w-full md:w-auto relative">
            <Search className="absolute w-4 h-4 text-zinc-500 left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-10 pr-4 py-2 outline-none focus:border-sky-500 transition shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50 shadow-lg">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-900 text-zinc-500 border-b border-zinc-800 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Delegate Profile</th>
                <th className="px-6 py-4">Country</th>
                <th className="px-6 py-4">Check-in Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {committeeDelegates.map((del) => {
                const delCheckins = rawCheckins.filter(
                  (c) => c.delegate_id === del.id,
                );
                const isCheckedIn = delCheckins.length > 0;

                return (
                  <tr
                    key={del.id}
                    className="hover:bg-zinc-800/50 transition cursor-pointer group"
                    onClick={() => setSelectedDelegate(del)}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-white group-hover:text-sky-300 transition">
                        {del.full_name}
                      </div>
                      <div className="text-zinc-500 text-xs mt-1">
                        {del.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">{del.country || "-"}</td>
                    <td className="px-6 py-4">
                      {isCheckedIn ? (
                        <div className="flex flex-col gap-1 items-start">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3" /> Checked In
                          </span>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
                          <XCircle className="w-3 h-3" /> Not Present
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sky-400 opacity-0 group-hover:opacity-100 inline-flex items-center gap-1 text-xs font-semibold transition-opacity">
                        View Profile <ChevronRight className="w-3 h-3" />
                      </span>
                    </td>
                  </tr>
                );
              })}
              {committeeDelegates.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-zinc-500"
                  >
                    No delegates assigned.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal view component wrapper reusing the global modal component! */}
        {selectedDelegate && (
          <DelegateProfileModal
            delegate={selectedDelegate}
            onClose={() => setSelectedDelegate(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <PieChart className="w-6 h-6 text-sky-400" /> Committee Progress
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Real-time breakdown of allocation counts and check-ins.
          </p>
        </div>
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-sm text-white transition"
        >
          Recalculate
        </button>
      </div>

      {loading ? (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-12 text-center text-zinc-500 font-medium">
          Crunching analytics...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {committees.map((c) => (
            <div
              key={c.name}
              onClick={() => setActiveCommittee(c.name)}
              className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 hover:border-sky-500/30 hover:bg-zinc-900/50 transition duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-lg text-white group-hover:text-sky-300 transition flex items-center gap-2">
                  {c.name}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </h3>
                <div className="bg-sky-500/10 text-sky-400 text-xs font-bold px-2 py-1 rounded border border-sky-500/20">
                  {c.count > 0 ? ((c.checkedIn / c.count) * 100).toFixed(0) : 0}
                  % Present
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Users className="w-4 h-4 text-zinc-500" /> Total Allocated
                  </div>
                  <span className="font-mono text-white bg-zinc-800 px-2 py-0.5 rounded">
                    {c.count}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm border-t border-zinc-800 pt-3">
                  <span className="text-emerald-500 font-medium text-xs uppercase tracking-wider">
                    Checked In
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {c.checkedIn}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2 border border-zinc-900">
                  <div
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-1000 ease-out"
                    style={{
                      width: `${c.count > 0 ? (c.checkedIn / c.count) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
