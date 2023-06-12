import Header from '@/components/Header';
import ReserveForm from '@/components/ReserveForm';
import ReserveHeader from '@/components/ReserveHeader';
import React from 'react';

export default function page() {
     return (
          <main className="bg-gray-100 min-h-screen w-screen text-neutral-900">
               <main className="max-w-screen-2xl m-auto bg-white">
                    <Header />
                    <div className="border-t h-screen">
                         <div className="py-9 w-3/5 m-auto">
                              <ReserveHeader />
                              {/* FORM */}
                              <ReserveForm />
                         </div>
                    </div>
               </main>
          </main>
     );
}
