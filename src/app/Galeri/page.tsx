import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

const Galeri = () => {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <h1 className="text-center font-bold mb-3"> Galeri Plavon Pvc Margasari</h1>
        <h1 className="text-center font-bold">PLAFON PVC</h1> 
        <p className=" text-justify">Plafon PVC Margasari menyediakan barang dan 
            layanan pemasangan secara borongan. Dengan kualitas produk yang terjamin, harga yang bersaing, dan 
            memiliki tim yang sangat berpengalaman. Kami memastikan setiap proyek selesai tepat waktu dan dengan 
            hasil yang memuaskan. Kami juga menyediakan konsultasi gratis untuk membantu Anda memilih produk dan 
            layanan yang sesuai dengan kebutuhan Anda.</p>
        <p className=" text-justify">Lihat beberapa galeri proyek kami untuk melihat contoh hasil kerja kami yang 
            telah sukses, dan temukan inspirasi untuk proyek Anda berikutnya.</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mx-1 my-5">
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_1.jpg" alt="Galeri 1" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_2.jpg" alt="Galeri 2" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_3.jpg" alt="Galeri 3" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_4.jpg" alt="Galeri 4" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_5.jpeg" alt="Galeri 5" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_6.jpeg" alt="Galeri 6" />
          </div>
          <div className="relative text-blue-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="gl_7.jpeg" alt="Galeri 7" />
          </div>
        </div>
    
        <h1 className="text-center font-bold">PARTISI DINDING PVC</h1> 
        <p className=" text-justify">Plafon PVC Margasari menyediakan bahan dan
            layanan pemasangan secara borongan. Dengan kualitas produk yang terjamin, harga yang bersaing, 
            dan memiliki tim yang sangat berpengalaman. Kami memastikan setiap proyek selesai tepat waktu dan 
            dengan hasil yang memuaskan. Kami juga menyediakan konsultasi gratis untuk membantu Anda memilih produk 
            dan layanan yang sesuai dengan kebutuhan Anda.</p>
        <p className=" text-justify">Lihat beberapa galeri proyek kami untuk melihat contoh hasil kerja kami yang 
            telah sukses, dan temukan inspirasi untuk proyek Anda berikutnya.</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mx-1 my-5">
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="glp_1.jpeg" alt="glp_1" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="glp_2.jpeg" alt="glp_2" />
          </div>
          <div className="relative rounded-md overflow-hidden">
            <img className="object-cover w-full h-full" src="glp_3.jpeg" alt="glp_3" />
          </div>
        </div> 
        <h1 className="text-center font-bold">BAJA RINGAN</h1> 
        <p className=" text-justify">Plafon PVC Margasari tidak hanya menjual plafon PVC, tetapi juga menyediakan 
          berbagai produk lainnya seperti bajaringan. Kami menawarkan layanan salah satunya pemasangan kanopi 
          dengan kualitas produk yang terjamin, harga yang bersaing, dan memiliki tim yang sangat berpengalaman. 
          Kami memastikan setiap proyek selesai tepat waktu dengan hasil yang memuaskan. Kami juga menyediakan 
          konsultasi gratis untuk membantu Anda memilih produk dan layanan yang sesuai dengan kebutuhan Anda.</p>
        <p className=" text-justify">Lihat beberapa contoh pemasangan baja ringan dan temukan inspirasi untuk proyek Anda berikutnya.</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center mx-1 my-5">
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="glb_1.jpg" alt="glb_1.jpg" />
          </div>
          <div className="relative rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img className="object-cover w-full h-full" src="glb_2.jpg" alt="glb_2" />
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Galeri;
