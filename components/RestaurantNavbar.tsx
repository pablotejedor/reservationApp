import Link from 'next/link';
import React from 'react';

export default function RestaurantNavbar() {
     return (
          <nav className="flex text-reg border-b pb-2">
               <Link href="/restaurant/Aiāna" className="mr-7">
                    Overview
               </Link>
               <Link href="/restaurant/Aiāna/menu" className="mr-7">
                    Menu
               </Link>
          </nav>
     );
}
