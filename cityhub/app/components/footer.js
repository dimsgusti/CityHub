import Logo from '../../images/logo-package/png/logo-color.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className="text-[#39393B] bg-[#F2F0E9] rounded-lg shadow m-4 bottom-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-center">
                    <a href="https://google.com/" className="flex items-center mb-4 sm:mb-0">
                        {/* Logo */}
                        <Image 
                            src={Logo}
                            width={100}
                            height={100}
                            className='mr-3'
                        />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap mr-16'>WebNusantara</span>
                    </a>
                    <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0'>
                        <li>
                            <Link href='/' className='mr-4 hover:underline md:mr-6'>About</Link>
                        </li>
                        <li>
                            <Link href='/' className='mr-4 hover:underline md:mr-6'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href='/' className='mr-4 hover:underline md:mr-6'>Licensing</Link>
                        </li>
                        <li>
                            <Link href='/' className='hover:underline'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8'></hr>
                <span className='block text-sm text-center text-gray-500 sm:text-center'>© 2023 <a href='https://google.com/' className='hover:underline'>Google</a>. All Rights Reserved.</span>
            </div>

        </footer>
    )
}