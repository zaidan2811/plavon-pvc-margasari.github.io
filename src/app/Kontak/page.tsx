import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page"
import Link from "next/link"
import { FacebookLogo, MapPinLine, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
const Kontak = () =>{
    return(
        <>
        <Navbar/>
        <div className="">
            <p className=" text-center m-5 font-bold">Alamat dan Kontak</p>
            <div className=" ml-10 mr-10 mb-10">
                <div className=' flex mb-2'>
                    <MapPinLine size={25} />
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
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Kontak