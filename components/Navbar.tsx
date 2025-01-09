import Link from 'next/link';
import {  buttonVariants } from './ui/button';
// import { HandMetal } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
 
import UserAccountnav from './UserAccountnav';

// const Navbar =async () => {
//     const session=await getServerSession(authOptions)
//   return (
//     <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 text-black'>
//       <div className='container flex items-center justify-between pl-4'>
//         <Link href='/'>
//           <HandMetal />
//         </Link>
//        {session?.user?(
//         <UserAccountnav/>
//        ):( <Link className={buttonVariants()} href='/sign-in'>
//        <div className='text-white'>
//          Sign in
//          </div>
//        </Link>)}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// export default async function Navbar() {
//   const session=await getServerSession(authOptions)
//   return( 
//    <div className="bg-black text-white shadow-md">
//       < div className=" container mx-auto px-4 flex justify-between items-center h-16">
//       <Link href="/" className="text-xl font-bold text-blue-500 ">
//              EigenGram
//        </Link>
      

       
//        <div className="flex space-x-6">
//          <Link href="/features" className="hover:text-gray-400">
//            Features
//          </Link>
//          <Link href="/pricing" className="hover:text-gray-400">
//            Pricing
//          </Link>
//          <Link href="/about" className="hover:text-gray-400">
//            About
//          </Link>
//          <Link href="/contact" className="hover:text-gray-400">
//            Contact
//          </Link>
//        </div>

//        {session?.user?(
//         <UserAccountnav/>
//        ):( <Link className={buttonVariants()} href='/sign-in'>
//        <div className='text-white'>
//          Sign in
//          </div>
//        </Link>)}
//        </div>
//    </div>
//   )
//  }
const Navbar = async () => {
  const session=await getServerSession(authOptions)
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-500">
          EigenGram
        </Link>
        
        {/* Links */}
        <div className="flex space-x-6">
          <Link href="/dashboard" className="hover:text-gray-400">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-gray-400">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
        
        {/* Call-to-Action */}
        {session?.user?(
        <UserAccountnav/>
       ):( <Link className={buttonVariants()} href='/sign-in'>
       <div className='text-white '>
         Sign in
         </div>
       </Link>)}
      </div>
    </nav>
  );
};

export default Navbar;

