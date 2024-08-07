import { FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, MapPinLine, TiktokLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-400 text-black py-3 mt-3">
      <div className="container mx-auto flex flex-wrap px-10">
        <div className="w-full lg:w-1/3 text-left mb-2 lg:mb-0">
          <p className="font-bold"> Distributor Plafon Pvc Margasari</p>
          <div className=' flex mb-2'>
            <MapPinLine size={30} />
            <Link href="https://maps.app.goo.gl/2hgpaukvEH13858i7">
              <span className="ml-2 hover:underline">Jalan Raya Margasari - Bumiayu Depan Pom Bensin Pakulaut</span>
            </Link>
          </div>
          <div className="flex mb-2">
            <WhatsappLogo size={20} />
            <span className="ml-2">0819 0219 4969</span>
          </div>
          <div className="flex mb-2">
          <FacebookLogo size={20} />
          <Link href="https://www.facebook.com/profile.php?id=61560261401971">
          <span className="ml-2 hover:underline">Plavon Pvc Margasari</span>
          </Link>
        </div>
          <p className="mt-6"> Copyright @ Distributor Plafon Pvc Margasari 2024 </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.goldenroofpolymer.com/">
            <img src="logo_golden.jpg" alt="" className=' w-10 h-10' />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex fitems-center mb-2 lg:mb-0 font-bold pl-20">
          <div className="border-l-8 border-yellow-500 h-full mr-4 pl-10">
            <p>Ikuti Kami</p>
            <ul className="flex space-x-4 mt-2">
              <li > <Link href="https://www.facebook.com/profile.php?id=61560261401971"><FacebookLogo size={40} className=' hover:text-blue-400 hover:shadow-md' /></Link>
              </li>
              <li > <Link href="https://www.tiktok.com/@plafon_pvc_margasari?_t=8nvWyvpV7qx&_r=1"><TiktokLogo size={40} className=' hover:text-white hover:shadow-md' /></Link>
              </li>
            </ul> 
            <hr className='border-black border-b-4 mt-2' />
            <p className=' font-bold'>Pasang Dulu Bayar Blakangan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
