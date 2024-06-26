import Link from "next/link";
import Container from "../ui/container";
import MainNav from "./main-nav";
import { NavItem } from "@/types";
import NavActions from "./nav-actions";
import { siteConfig } from "@/config/site";
import { auth } from "@/auth";

const Navbar = async () => {
    const navItems : NavItem[]  = siteConfig["nav-options"]
    const data = await auth()
    const user = data?.user
    return ( 
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center gap-x-10">
                    <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-2xl">CLC3</p>
                    </Link>
                    <MainNav data={navItems} user={user}/>
                    <NavActions data={navItems} user={user}/>
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;