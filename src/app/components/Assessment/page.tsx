import { FaHome, FaUserTie, FaClipboardList } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import Image from 'next/image';

const QuizPage = () => {
  return (
    <div id="assessment" className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="flex   py-8 ml-8">
        <Image
          src="/images/logo.png"
          alt="Ujuzi Logo"
          width={100}
          height={100}
        />
      </div>

      <nav className="flex-grow px-4 space-y-6">
        <a href="#" className="flex items-center text-lg space-x-4 hover:bg-blue-700 p-3 rounded-md">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="#teacher" className="flex items-center text-lg space-x-4 hover:bg-blue-700 p-3 rounded-md">
          <FaUserTie />
          <span >Teachers</span>
        </a>
        <a href="#" className="flex items-center text-lg space-x-4 hover:bg-yellow-500 p-3 rounded-md">
          <FaClipboardList />
          <span >Assessment</span>
        </a>
        <a href="#" className="flex items-center text-lg space-x-4 hover:bg-blue-700 p-3 rounded-md">
          <MdPerson />
          <span>Trainers</span>
        </a>
      </nav>
     
    </aside>

     
      <main className="flex-grow p-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Module 1</h1>
            <p className="text-sm text-green-500">Module 1 completed</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/notification.png" 
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
         
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
              ✓
            </div>
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
              ✓
            </div>
            <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center text-gray-700">
              ✔
            </div>
          </div>

         
          <h2 className="text-yellow-500 text-lg font-bold">Question 2</h2>
          <p className="text-xl mt-4">How many countries are there in Africa?</p>

        
          <div className="mt-4 space-y-3">
            <div className="p-4 border rounded-md hover:bg-gray-100">
              A) 54
            </div>
            <div className="p-4 border rounded-md hover:bg-gray-100">
              B) 50
            </div>
            <div className="p-4 border rounded-md hover:bg-gray-100">
              C) 75
            </div>
            <div className="p-4 border rounded-md hover:bg-gray-100">
              D) 34
            </div>
          </div>

          
          <div className="flex justify-between mt-6">
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gray-100">
              Previous
            </button>
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
              Next Question
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;