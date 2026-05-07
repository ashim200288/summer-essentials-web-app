// "use client";

// import Link from "next/link";
// import { MdProductionQuantityLimits } from "react-icons/md";
// export default function Navbar() {
//   return (
//     <nav className="w-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 flex items-center justify-between">
      
//       {/* Logo */}
//       <div className="flex items-center gap-2 text-white font-bold text-xl">
//         <div className="bg-white text-orange-500 rounded-md p-2">
//           <MdProductionQuantityLimits />
//         </div>
//         <span>SunCart</span>
//       </div>

//       <div className="flex items-center gap-6 text-white font-medium">
//         <Link href="/">Home</Link>
//         <Link href="/products">Products</Link>

//         <Link href="/auth/signin">
//           <button className="bg-white text-orange-500 px-4 py-1 rounded-md font-semibold hover:opacity-90">
//             Login
//           </button>
//         </Link>

//         <Link href="/auth/signup">
//           <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-pink-500 transition">
//             Register
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="w-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        <div className="bg-white text-orange-500 rounded-md p-2">
          <MdProductionQuantityLimits />
        </div>
        <span>SunCart</span>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-6 text-white font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>

        {!session ? (
          <>
            <Link href="/auth/signin">
              <button className="bg-white text-orange-500 px-4 py-1 rounded-md font-semibold hover:opacity-90">
                Login
              </button>
            </Link>

            <Link href="/auth/signup">
              <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-pink-500 transition">
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile" className="bg-white text-orange-500 px-4 py-1 rounded-md font-semibold">
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-pink-500 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}