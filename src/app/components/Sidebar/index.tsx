'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaChalkboardTeacher, FaClipboardList, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Teachers', icon: <FaChalkboardTeacher />, path: '/teachers' },
    { name: 'Assessment', icon: <FaClipboardList />, path: '/assessment' },
    { name: 'Trainers', icon: <FaUsers />, path: '/trainers' },
  ];

  return (
    <aside className="...">
      <div className="p-5">
        <img src="/path-to-your-logo.png" alt="Ujuzi Logo" className="w-16 h-16 mx-auto mb-8" />
        <nav>
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`flex items-center p-3 mb-4 rounded cursor-pointer ${
                  pathname === item.path ? 'bg-yellow-500' : 'hover:bg-blue-800'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

