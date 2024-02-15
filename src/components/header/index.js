import { Logo } from "./logo";
import { NavItems } from "./nav-items";

export const Header = () => {
    return <header className="flex justify-between place-items-center  mb-10 px-72 shadow-lg text-xl" >
        <Logo />
        <NavItems />
    </header>
} 
