import Link from 'next/link'
import styles from './layout.module.css'
import IconSchool from '../../images/icons/school.svg'
import IconHospital from '../../images/icons/hospital.svg'
import IconGovernment from '../../images/icons/government.svg'
import IconReport from '../../images/icons/report.svg'
import IconLeaf from '../../images/icons/leaf.svg'
import IconFerisWheel from '../../images/icons/feris_wheel.svg'
import Image from 'next/image'

export default function App(){
    return(
        <main className="mt-2 md:mt-4 mr-4 ml-4 lg:mr-8 lg:ml-8 xl:mr-32 xl:ml-32 2xl:mr-64 2xl:ml-64">
            <div className='w-full h-auto'>
                <hr />
                <h1 className='text-xl mt-4 font-bold'>Kategori</h1>
                <div className='m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 place-content-center'>
                    {/* App Card */}
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image 
                                src={IconHospital}
                                width={50}
                                height={50}
                                className='mt-4 md:w-[6.25rem] md:h-[6.25rem]'
                                alt='Kesehatan'
                                priority
                                />
                                <h1 className='text-2xl mt-2 text-center'>Kesehatan</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image 
                                src={IconSchool}
                                width={50}
                                height={50}
                                className='mt-4 md:w-[6.25rem] md:h-[6.25rem]'
                                alt='Pendidikan'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Pendidikan</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={IconGovernment}
                                width={50}
                                height={50}
                                className='mt-4 md:w-[6.25rem] md:h-[6.25rem]'
                                alt='Pemerintahan'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Pemerintahan</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={IconReport}
                                width={50}
                                height={50}
                                className='mt-4 md:w-[6.25rem] md:h-[6.25rem]'
                                alt='Keamanan'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Keamanan</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={IconLeaf}
                                width={50}
                                height={50}
                                className='mt-4 md:w-[6.25rem] md:h-[6.25rem]'
                                alt='Lingkungan'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Lingkungan</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href='/' className='m-4 p-4 md:m-0 md:p-0'>
                        <div className={styles.appFrame}>
                            <div className={styles.appClick}>
                                <Image
                                src={IconFerisWheel}
                                width={50}
                                height={50}
                                className='mt-4 md:w-[6.25rem] md:h-[6.25rem]'
                                alt='Tempat Hiburan'
                                />
                                <h1 className='text-2xl mt-2 text-center'>Tempat Hiburan</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}