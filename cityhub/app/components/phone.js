import Link from 'next/link'

export default function Phone(){
    return(
        <main className="md:hidden">
            <hr></hr>
            <div className="w-full h-12 bg-[#F2F0E9] flex justify-center items-center gap-12">
                <Link href='/'>Beranda</Link>
                <Link href='/pages/berita'>Berita</Link>
                <Link href='/pages/informasi'>Informasi</Link>
            </div>
        </main>
    )
}