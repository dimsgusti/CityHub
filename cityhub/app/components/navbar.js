import Link from "next/link"
import styles from './layout.module.css'

const webName = 'Samarinda Hub';

export default function Navbar(){
    return(
        <nav className="text-[#39393B] bg-[#F2F0E9] sticky top-0">
            <div className="flex justify-evenly p-8">
                <div className="lg:text-lg">
                    <Link href='/' className={styles.btn}>{webName}</Link>
                </div>
                <div className="hidden md:flex gap-8 lg:text-md">
                    <Link href='' className={styles.btn}>Beranda</Link>
                    <Link href='' className={styles.btn}>Berita</Link>
                    <Link href='' className={styles.btn}>Informasi</Link>
                </div>
                {/* <div className="hidden lg:block"> */}
                <div className="lg:block lg:text-lg">
                    <Link href='/pages/account' className={styles.btnPrimary}>Login</Link>
                </div>
            </div>
        </nav>
    )
}