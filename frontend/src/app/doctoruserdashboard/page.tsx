"use client";
import React from 'react';
import { FaHome, FaChartBar, FaWallet, FaFileInvoice, FaUser, FaCog, FaMoon, FaQuestionCircle, FaHamburger, FaCar, FaMoneyCheckAlt, FaApple, FaPaperPlane, FaSave } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { MenuIcon, PhoneIcon, BellIcon, UserIcon, DownloadIcon, MedDeFiLogo } from '@/components/ui/mainpage/Components';



const navItems = [
  { icon: <FaHome />, label: 'Home' },
  { icon: <FaChartBar />, label: 'Analytics' },
  { icon: <FaWallet />, label: 'Wallets' },
  { icon: <FaFileInvoice />, label: 'Invoices' },
  { icon: <FaUser />, label: 'Account' },
  { icon: <FaCog />, label: 'Settings' },
];

const transactions = [
  {
    icon: <FaHamburger className="text-blue-400" />, name: 'Dunkin donuts', date: 'May 23, 2022 at 8:20 PM', type: 'Food', amount: '-$19.00', color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: <FaCar className="text-blue-400" />, name: 'Uber', date: 'May 23, 2022 at 10:36 AM', type: 'Transport', amount: '-$7.00', color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: <FaMoneyCheckAlt className="text-green-400" />, name: 'Payment Salary', date: 'May 23, 2022 at 9:48 AM', type: 'Service', amount: '+$15,000', color: 'bg-green-100 text-green-600',
  },
  {
    icon: <FaUser className="text-green-400" />, name: 'Elon Musk', date: 'May 22, 2022 at 4:48 PM', type: 'Service', amount: '+$3,000', color: 'bg-green-100 text-green-600',
  },
  {
    icon: <FaApple className="text-orange-400" />, name: 'Apple', date: 'May 22, 2022 at 2:20 PM', type: 'Shop', amount: '-$99.00', color: 'bg-orange-100 text-orange-600',
  },
];

const moneyFlowData = [
  { name: 'DEC 2', value: 800 },
  { name: 'DEC 3', value: 1200 },
  { name: 'DEC 4', value: 1800 },
  { name: 'DEC 5', value: 2600 },
  { name: 'DEC 6', value: 2100 },
  { name: 'DEC 7', value: 2200 },
  { name: 'DEC 8', value: 2500 },
  { name: 'DEC 9', value: 3200 },
  { name: 'DEC 10', value: 4000 },
  { name: 'DEC 11', value: 4200 },
  { name: 'DEC 12', value: 3900 },
];

const summaryData = [
  { name: 'Service', value: 35, color: '#22c55e' },
  { name: 'Transport', value: 17, color: '#3b82f6' },
  { name: 'Health', value: 11, color: '#a21caf' },
  { name: 'Shop', value: 25, color: '#f59e42' },
  { name: 'Food', value: 12, color: '#f472b6' },
];

const contacts = [
  { name: 'John', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Jane', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Alex', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
  { name: 'Sara', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'More', img: '' },
];

export default function DoctorUserDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between min-h-screen">
        <div>
          <div className="flex items-center gap-2 px-6 py-8">
           <MedDeFiLogo />
          </div>
          <nav className="flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <button key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="px-4 pb-8 flex flex-col gap-4">
          <button className="flex items-center gap-2 text-blue-500 hover:underline">
            <FaQuestionCircle /> Get Help
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
            <FaMoon /> Dark mode
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 grid grid-cols-3 gap-8">
        <section className="col-span-2 flex flex-col gap-6">
          {/* Overview */}
          <section className="flex gap-6 mb-6">
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="text-gray-400 text-sm">Total Balance</div>
              <div className="text-3xl font-bold">$25,369</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="text-gray-400 text-sm">Credit Limit</div>
              <div className="text-2xl font-bold">$7,785</div>
            </div>
            <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl px-8 py-4 font-semibold shadow hover:from-blue-500 hover:to-blue-600 transition">
              Transfer Money
            </button>
          </section>
          {/* Money Flow Chart */}
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="font-semibold">Money Flow</div>
                <div className="text-blue-500 text-xs font-bold">+6.79%</div>
              </div>
              <button className="bg-gray-100 px-3 py-1 rounded text-sm">Week</button>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={moneyFlowData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Transactions */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-4">Transactions</div>
            <div className="flex gap-4 mb-4">
              <button className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-1">All</button>
              <button className="text-gray-400 font-semibold pb-1">Upcoming</button>
            </div>
            <ul className="divide-y">
              {transactions.map((tx, idx) => (
                <li key={idx} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-full p-2">{tx.icon}</div>
                    <div>
                      <div className="font-medium">{tx.name}</div>
                      <div className="text-xs text-gray-400">{tx.date}</div>
                    </div>
                    <span className={`ml-3 px-2 py-1 rounded text-xs font-semibold ${tx.color}`}>{tx.type}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-bold ${tx.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{tx.amount}</span>
                    <button className="bg-blue-50 text-blue-500 px-3 py-1 rounded text-xs font-semibold">See Invoice</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* Right Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Wallet Card */}
           {/* Wallet Card */}  
       <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl shadow-lg p-6 text-white relative">
       <div className="flex items-center space-x-4 justify-between">
            <button className="relative">
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              <span role="img" aria-label="bell">🔔</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="font-semibold flex items-center gap-2">Dr. Frank Heller <span className="text-xs bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center">JD</span></div>
            </div>
           
          </div>
            <div className="text-lg tracking-widest font-mono mb-2">1234 5678 9000 0000</div>
            
            
          </div>
          {/* Quick Transfer */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-4">Quick transfer</div>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Account number"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select className="border rounded px-3 py-2">
                <option>Debit - $10,432</option>
                <option>Credit - $7,785</option>
              </select>
              <input
                type="text"
                placeholder="Enter amount"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex gap-2 mt-2">
                <button type="submit" className="flex-1 bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-600">
                  <FaPaperPlane /> Send money
                </button>
                <button type="button" className="flex-1 bg-gray-100 text-gray-700 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200">
                  <FaSave /> Save as draft
                </button>
              </div>
            </form>
          </div>
          {/* Account Summary */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-sm text-gray-400">Income</div>
                <div className="text-lg font-bold text-green-500">+$27,785</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Expense</div>
                <div className="text-lg font-bold text-red-500">-$27,785</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={summaryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                >
                  {summaryData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Contacts */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-4">Contacts</div>
            <div className="flex items-center gap-3">
              {contacts.map((c, idx) =>
                c.img ? (
                  <img
                    key={idx}
                    src={c.img}
                    alt={c.name}
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                  />
                ) : (
                  <div key={idx} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-lg shadow">
                    +35
                  </div>
                )
              )}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
} 