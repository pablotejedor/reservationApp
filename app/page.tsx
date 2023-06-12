import Card from '@/components/Card';
import Header from '@/components/Header';
import SubHeader from '@/components/SubHeader';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
     return (
          <main className="bg-gray-100 min-h-screen w-screen">
               <main className="max-w-screen-2xl m-auto bg-white">
                    <Header />
                    <main>
                         <SubHeader />
                         <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
                              <Card />
                         </div>
                    </main>
               </main>
          </main>
     );
}
