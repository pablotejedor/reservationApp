import React from 'react';
import Link from 'next/link';

export default function Header() {
     return (
          <nav className="bg-white p-2 flex justify-between">
               <Link href="" className="font-bold text-gray-700 text-2xl">
                    OpenTable
               </Link>
               <div>
                    <div className="flex">
                         <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                              Sign in
                         </button>
                         <button className="bg-red-500 border p-1 px-4 rounded text-white">
                              Sign up
                         </button>
                    </div>
               </div>
          </nav>
     );
}
