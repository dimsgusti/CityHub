import styles from './layout.module.css'
import Link from 'next/link'


export default function LandingPage(){
    return(
        <main className="w-full h-80" id='landingPageBg'>
            <div className="flex flex-col justify-center text-center m-0 p-4 lg:m-0 text-[#F2F0E9] h-full rounded-bl-3xl rounded-tr-3xl">
                <h1 className="text-xl font-bold">Pusat Informasi Online Kota Samarinda</h1>
                <h1>By DimasGusti</h1>
                <div className='w-auto mt-4 text-xl font-bold text-white'>
                    <Link href='/pages/berita' className={styles.btnPrimary}>
                        Berita Samarinda
                    </Link>
                </div>
                <h1 className='mt-4'>Image from <a href='https://www.theguardian.com/environment/gallery/2015/aug/17/indonesia-coal-power-in-pictures' className='hover:underline'>The Guardian</a></h1>
            </div>
        </main>
    )
}