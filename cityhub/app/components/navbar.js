import Link from "next/link"
import styles from './layout.module.css'

const webName = 'Samarinda Hub';

export default function Navbar(){
    return(
        <nav className="text-[#39393B] bg-[#F2F0E9] sticky top-0">
            <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Pemberitahuan
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Website masih dalam pengembangan!</p>
                </div>
            </div>
            <div className="flex justify-evenly p-8">
                <div className="lg:text-lg">
                    <Link href='/' className={styles.btn}>{webName}</Link>
                </div>
                <div className="hidden md:flex gap-8 lg:text-md">
                    <Link href='/' className={styles.btn}>Beranda</Link>
                    <Link href='/pages/berita' className={styles.btn}>Berita</Link>
                    <Link href='/pages/informasi' className={styles.btn}>Informasi</Link>
                </div>
                {/* <div className="hidden lg:block"> */}
                <div className="lg:block lg:text-lg">
                    <Link href='/pages/account' className={styles.btnPrimary}>Login</Link>
                </div>
            </div>
        </nav>
    )
}