import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
     title: 'reservationApp',
     description:
          'App made so you can create a reservation in you favourite restaurants!',
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en">
               <body className={inter.className}>{children}</body>
          </html>
     );
}
