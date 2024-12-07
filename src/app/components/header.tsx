import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  



function Header (){
    return(
        <header className="w-full h-14 bg-black flex justify-between items-center text-white p-5"> 
            {/*logo*/}
            <div>
                <h1 className="text-3xl font-bold">{"SA"}</h1>
            </div>

            {/*Nav links*/}
            <div>
            <ul className="hidden md:block">
                <li className="space-x-5 font-semibold">
                 <Link href={"/home"}>Home</Link>
                 <Link href={"/about"}>About</Link>
                 <Link href={"]/contact"}>Contact</Link>
                 <Link href={"/projects"}>Project</Link>
                 <button className="bg-white hover:bg-gray-400 text-black py-2 px-4 font-bold rounded-xl pr-4">Download CV</button>
                </li>
            </ul>
            </div>
<Sheet>
<SheetTrigger className="text-xl md:hidden">
<HiMenu/>
</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>SYEDA</SheetTitle>
      <SheetDescription>
        <div>
      <ul>
                <li className="flex flex-col gap-y-5 font-semibold text-black" >
                 <Link href={"/home"}>Home</Link>
                 <Link href={"/about"}>About</Link>
                 <Link href={"/contact"}>Contact</Link>
                 <Link href={"/projects"}>Project</Link>
                 <button className="bg-black hover:bg-gray-400 text-white py-2 px-4 font-bold rounded-xl pr-4">Download CV</button>
                </li>
            </ul>
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </header>
    )
}
export default Header;