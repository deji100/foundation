// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 py-8 px-4 border-t border-gray-200">
//       <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
//         {/* Logo */}
//         <div className="mb-4">
//           <Image
//             src="/footer-logo.webp" // Replace with your actual logo path
//             alt="George Taylor Foundation"
//             width={100}
//             height={100}
//           />
//         </div>

//         <div className="flex flex-col items-center text-center">
//           {/* Navigation */}
//           <nav className="flex gap-8 text-sm text-blue-900 font-medium mb-4">
//             <Link href="#">About Us</Link>
//             <div className="relative group">
//               <button className="focus:outline-none">Key Initiatives ▾</button>
//               {/* Dropdown placeholder */}
//               <div className="absolute bottom-0 hidden group-hover:block bg-white shadow rounded mt-0 py-2 w-[200px] z-10">
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Youth Empowerment
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Clean Water Initiative
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Housing Projects
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Scholarships
//                 </Link>
//               </div>
//             </div>
//             <Link href="#">News</Link>
//           </nav>

//           {/* Social Icons */}
//           <div className="flex gap-4">
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <Facebook className="text-blue-700 w-5 h-5" />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <Twitter className="text-blue-500 w-5 h-5" />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <Instagram className="text-pink-600 w-5 h-5" />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <Linkedin className="text-blue-800 w-5 h-5" />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <Youtube className="text-red-600 w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/footer-logo.webp" // Replace with your actual logo path
            alt="George Taylor Foundation"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-blue-900 font-medium mb-4">
            <Link href="/about-us">About Us</Link>

            <div className="relative group">
              <button className="focus:outline-none">
                Key Initiatives ▾
              </button>
              {/* Dropdown */}
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0 bottom-full hidden group-hover:block bg-white shadow rounded mt-2 py-2 w-[200px] z-10 text-left">
                <Link href="/youth-empowerment" className="block px-4 py-2 hover:bg-gray-100">
                  Youth Empowerment
                </Link>
                <Link href="/clean-water-initiatives" className="block px-4 py-2 hover:bg-gray-100">
                  Clean Water Initiative
                </Link>
                <Link href="/housing-projects" className="block px-4 py-2 hover:bg-gray-100">
                  Housing Projects
                </Link>
                <Link href="/scholarships" className="block px-4 py-2 hover:bg-gray-100">
                  Scholarships
                </Link>
              </div>
            </div>

            <Link href="#">News</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-700 w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-blue-500 w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-pink-600 w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-blue-800 w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Youtube className="text-red-600 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
