import Link from 'next/link'
import styles from './layout.module.css'
import Logo from '../../images/logo-package/png/logo-color.png'
import Image from 'next/image'

export default function App(){
    return(
        <main className="mt-2 md:mt-4 mr-4 ml-4 lg:mr-8 lg:ml-8 xl:mr-32 xl:ml-32 2xl:mr-64 2xl:ml-64">
            <div className='w-full h-auto'>
                <div className='m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 place-content-center'>
                    {/* App Card */}
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={Logo}
                                width={150}
                                height={150}
                                className='rounded-full mt-4'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Rumah Sakit</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={Logo}
                                width={150}
                                height={150}
                                className='rounded-full mt-4'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Pemadam Kebakaran</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={Logo}
                                width={150}
                                height={150}
                                className='rounded-full mt-4'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Polisi</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={Logo}
                                width={150}
                                height={150}
                                className='rounded-full mt-4'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Dinas Sosial Samarinda</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}