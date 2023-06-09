import Header from '@/components/Header';
import Menu from '@/components/Menu';
import RestaurantNavbar from '@/components/RestaurantNavbar';
import RestaurantSubheader from '@/components/RestaurantSubheader';
import React from 'react';

export default function page() {
     return (
          <main className="bg-gray-100 min-h-screen w-screen text-neutral-900">
               <main className="max-w-screen-2xl m-auto bg-white">
                    <Header />
                    <RestaurantSubheader />
                    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                         <div className="bg-white w-[100%] rounded p-3 shadow">
                              <RestaurantNavbar />
                              <Menu />
                         </div>
                    </div>
               </main>
          </main>
     );
}
