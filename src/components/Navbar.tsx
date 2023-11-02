import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <header className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2 ">
      <nav className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          {<Icons.logo className="w-8 h-8 sm:w-6 sm:h-6" />}

          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>

        {/* SearchBar  */}

        {/* Auth */}

        {session ? (
          <p>You are logged in</p>
        ) : (
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "ghost" })}
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
