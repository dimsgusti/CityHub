import styles from './layout.module.css'
import Link from 'next/link'

export default function LandingPage(){
    return(
        <main className="w-full h-80">
            <div className="flex flex-col justify-center text-center m-2 p-4 lg:m-8 text-[#39393B] h-full rounded-bl-3xl rounded-tr-3xl">
                <h1 className="text-xl font-bold">Pusat Informasi Online Kota Samarinda</h1>
                <h1>By DimasGusti</h1>
                <div className='w-auto mt-4'>
                    <Link href='/pages/berita' className={styles.btnPrimary}>
                        Berita Samarinda
                    </Link>
                </div>
            </div>
        </main>
    )
}