"use client"

import React, { useState, useEffect } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

const images = [
  'toko_pvc.jpg',
  'toko_pvc2.jpg',
];

const MainContent: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval);
  }, []);
 
  return (
    <div>
      <div  className="main-content" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      </div>
        <div className='sm:text-sm text-center'>
          <h1 className="text-3xl mb-6 mt-5 text-center">KEUNGGULAN PLAFON <br />PVC
          </h1>
        </div>
          {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-neutral-400 gap-4 font-bold p-2">
          <div className='flex flex-col items-center justify-center'>
            <img className="h-20 w-20 " src="https://eliteplafon.co.id/img/features/anti_rayap.png" alt=""/>
            <p className="text-white mt-2">Anti Rayap</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className="h-20 w-20 " src="https://eliteplafon.co.id/img/features/mudah_dibersihkan.png" alt=""/>
            <p className="text-white mt-2">Mudah Dipasang</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className="h-20 w-20 " src="https://eliteplafon.co.id/img/features/ramah_lingkungan.png" alt=""/>
            <p className="text-white mt-2">Ramah Lingkungan</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className="h-20 w-20 " src="https://eliteplafon.co.id/img/features/tahan_air.png" alt=""/>
            <p className="text-white mt-2">Tahan Air</p>
          </div>
          <div className='flex flex-col items-center justify-center col-span-2 lg:col-span-1'>
            <img className="h-20 w-20 " src="https://eliteplafon.co.id/img/features/tidak_merambat_api.png" alt=""/>
            <p className="text-white mt-2">Tidak Merambat Api</p>
          </div >
          
        </div>

        <div className='sm:text-sm text-center'>
          <h1 className="text-3xl mt-5 text-center">PRODUK KAMI
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-stretch gap-5 m-5">
          <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl sm:max-w-2xl lg:max-w-2xl m-2">
            <div>
            <img src="produk_2.jpg" alt="" className='h-50 w-full' />
              <div className="p-2">
                <h1 className=' text-xl text-center text-neutral-600 font-bold '>PLAVON PVC</h1>
                <p className="block m-2 text-lg leading-tight text-center mb-5 "> Menggunakan bahan PVC Premium menjadikan plafon lebih lentur, kuat, awet, tahan lama, dengan warna yang cerah.
                </p>
              </div> 
          </div>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl sm:max-w-2xl lg:max-w-2xl m-2">
          <div>
            <img src="produk_3.png" alt="" className='h-50 w-full' />
              <div className="p-2">
              <h1 className=' text-xl text-center text-neutral-600 font-bold '>PARTISI DINDING PVC</h1>
                <p className="block m-2 text-lg leading-tight text-center  mb-5"> Didesign khusus sebagai partisi dinding. Produk ini diproduksi dengan mengutamakan tahan benturan dan motif yang estetik.</p>
              </div> 
          </div>
        </div>
          <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl sm:max-w-2xl lg:max-w-2xl m-2">
            <div>
            <img src="produk_1.png" alt="" className=' h-50 w-full' />
              <div className="p-2">
              <h1 className=' text-xl text-center text-neutral-600 font-bold '>LIS DINDING PVC</h1>
                <p className="block m-2 text-lg leading-tight text-center mb-8"> Beragam model dan motif lis yang menyesuaikan dengan kebutuhan ruangan Anda.</p>
              </div> 
          </div>
        </div>
      
          <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl sm:max-w-2xl lg:max-w-2xl m-2">
            <div>
            <img src="produk_4.jpg" alt="" className='h-50 w-full' />
            
              <div className="p-2">
              <h1 className=' text-xl text-center text-neutral-600 font-bold '>BAJA RINGAN</h1>
                <p className="block m-2 text-lg leading-tight text-center mb-5"> Beragam jenis baja ringan yang disesuaikan dengan kebutuhan Anda. Baja ringan ini anti karat, tahan lama, dan mudah dalam proses pemasangan.
                </p>
              </div> 
          </div>
        </div>
      </div>
        <div className="flex flex-col lg:flex-row md:flex-row items-center sm:items-start">
          <div className="flex-shrink-0 lg:w-1/2 items-center lg:pl-40">
            <img src="konsultasi_1.jpg" alt="" className=' w-300 h-300'/>
          </div>
        <div className="lg:w-1/2 ">
            <p className="text-lg text-left lg:m-20 m-10">
            <span className=' italic underline'>Konsultasi Proyek</span> <br /> <br />
            <span className=' text-neutral-600 font-bold'>HUBUNGI KAMI SEKARANG JUGA!</span> <br />
            <span>Konsultasikan kebutuhan proyek kepada kami. Dapatkan penawaran produk dan harga yang menarik.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
