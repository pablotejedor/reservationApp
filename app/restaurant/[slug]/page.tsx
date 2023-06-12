import Header from '@/components/Header';
import RestaurantDescription from '@/components/RestaurantDescription';
import RestaurantImages from '@/components/RestaurantImages';
import RestaurantNavbar from '@/components/RestaurantNavbar';
import RestaurantRating from '@/components/RestaurantRating';
import RestaurantReservation from '@/components/RestaurantReservation';
import RestaurantReviews from '@/components/RestaurantReviews';
import RestaurantSubheader from '@/components/RestaurantSubheader';
import RestaurantTitle from '@/components/RestaurantTitle';

export default function page() {
     return (
          <main className="bg-gray-100 min-h-screen w-screen text-neutral-900">
               <main className="max-w-screen-2xl m-auto bg-white">
                    <Header />
                    <RestaurantSubheader />
                    {/* DESCRIPTION PORTION */}
                    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                         <div className="bg-white w-[70%] rounded p-3 shadow">
                              <RestaurantNavbar />
                              <RestaurantTitle />
                              <RestaurantRating />
                              <RestaurantDescription />
                              <RestaurantImages />
                              <RestaurantReviews />
                         </div>
                         <RestaurantReservation />
                    </div>
                    {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{' '}
                    {/* RESERVATION
    CARD PORTION */}
               </main>
          </main>
     );
}
