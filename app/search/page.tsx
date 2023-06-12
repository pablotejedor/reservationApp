import Header from '@/components/Header';
import SearchCard from '@/components/SearchCard';
import SearchSideBar from '@/components/SearchSideBar';
import SearchSubheader from '@/components/SearchSubheader';
import React from 'react';

export default function page() {
     return (
          <main className="bg-gray-100 min-h-screen w-screen">
               <main className="max-w-screen-2xl m-auto bg-white">
                    {/* NAVBAR */}
                    <Header />
                    {/* HEADER */}
                    <SearchSubheader />
                    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                         <SearchSideBar />
                         <div className="w-5/6">
                              <SearchCard />
                         </div>
                    </div>
               </main>
          </main>
     );
}
