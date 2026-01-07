import React from 'react';

export default function InvoicesPage() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white">Past Invoices</h1>
                <p className="text-slate-500 dark:text-gray-400">View and manage your billing history.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-primary hover:bg-green-500 text-[#0d1b0d] px-6 py-3 font-bold shadow-lg shadow-green-500/20">
                <span className="material-symbols-outlined !text-[20px]">payments</span> Make a Payment
            </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] mb-6">
            <div className="relative flex-1 min-w-[280px] w-full">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400">search</span>
                <input type="text" placeholder="Search invoices..." className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                <button className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 whitespace-nowrap">
                    Status: All <span className="material-symbols-outlined !text-[18px]">expand_more</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 whitespace-nowrap">
                    Date: Last 6 Months <span className="material-symbols-outlined !text-[18px]">expand_more</span>
                </button>
                <button className="flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 w-9 h-9 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 ml-auto lg:ml-0">
                    <span className="material-symbols-outlined !text-[20px]">download</span>
                </button>
            </div>
        </div>

        {/* Table */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-[#e7f3e7] dark:border-[#2a3f2a]">
                            <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500 dark:text-gray-400">Invoice #</th>
                            <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500 dark:text-gray-400">Date</th>
                            <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500 dark:text-gray-400">Service</th>
                            <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500 dark:text-gray-400 text-right">Amount</th>
                            <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500 dark:text-gray-400 text-center">Status</th>
                            <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500 dark:text-gray-400 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7f3e7] dark:divide-[#2a3f2a]">
                        {[
                            { id: 'INV-2023-084', date: 'Nov 01, 2023', due: 'Nov 15', service: 'Leaf Removal & Gutter Cleaning', amount: '$120.00', status: 'Pending', statusColor: 'yellow' },
                            { id: 'INV-2023-072', date: 'Oct 12, 2023', due: 'Oct 26', service: 'Bi-weekly Lawn Mowing', amount: '$45.00', status: 'Paid', statusColor: 'green' },
                            { id: 'INV-2023-068', date: 'Sep 28, 2023', due: 'Oct 12', service: 'Aeration & Overseeding', amount: '$250.00', status: 'Paid', statusColor: 'green' },
                            { id: 'INV-2023-055', date: 'Sep 14, 2023', due: 'Sep 28', service: 'Bi-weekly Lawn Mowing', amount: '$45.00', status: 'Paid', statusColor: 'green' },
                            { id: 'INV-2023-040', date: 'Aug 01, 2023', due: 'Overdue by 3 mo', service: 'Tree Trimming Service', amount: '$300.00', status: 'Overdue', statusColor: 'red' },
                        ].map((invoice, i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-white">
                                    <div className="flex items-center gap-2">
                                        <span className={`material-symbols-outlined !text-[18px] ${invoice.statusColor === 'red' ? 'text-red-500' : 'text-slate-400'}`}>{invoice.statusColor === 'red' ? 'warning' : 'receipt'}</span>
                                        {invoice.id}
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-900 dark:text-white">{invoice.date}</span>
                                        <span className={`text-xs ${invoice.statusColor === 'red' ? 'text-red-500 font-bold' : 'text-slate-500'}`}>Due: {invoice.due}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm text-slate-600 dark:text-gray-300">{invoice.service}</td>
                                <td className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white text-right">{invoice.amount}</td>
                                <td className="py-4 px-6 text-center">
                                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold border ${
                                        invoice.statusColor === 'green' ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' :
                                        invoice.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800' :
                                        'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
                                    }`}>
                                        {invoice.status === 'Pending' && <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>}
                                        {invoice.status === 'Paid' && <span className="material-symbols-outlined !text-[14px]">check</span>}
                                        {invoice.status === 'Overdue' && <span className="material-symbols-outlined !text-[14px]">priority_high</span>}
                                        {invoice.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="text-slate-400 hover:text-primary p-1"><span className="material-symbols-outlined !text-[20px]">visibility</span></button>
                                        <button className="text-slate-400 hover:text-primary p-1"><span className="material-symbols-outlined !text-[20px]">download</span></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-[#e7f3e7] dark:border-[#2a3f2a] px-6 py-3 bg-slate-50 dark:bg-slate-800/50">
                <p className="text-sm text-slate-700 dark:text-gray-300 hidden sm:block">Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> results</p>
                <div className="flex gap-2 ml-auto sm:ml-0">
                    <button className="px-3 py-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-700">Previous</button>
                    <button className="px-3 py-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-700">Next</button>
                </div>
            </div>
        </div>
    </div>
  );
}