import { NavBar } from "./nav/NavBar"
export const Header = () =>{
    return(
<header className={`absolute top-0 w-full md:pl-12 md:pr-12 md:pt-8  
    z-20 p-3 mb-[30px] v`}>
    <NavBar/>
</header>
    )
}