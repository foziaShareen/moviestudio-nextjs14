import CaroselBanner from '@/components/CaroselBanner';
import { getNowPlayingMovies } from '@/lib/getMovies';
// import DropDownMenu from '@/components/DropDownMenu';
export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  console.log(nowPlayingMovies);
  return (
   <main>
    <CaroselBanner id="" keywords=""/>
   </main>
  );
}
