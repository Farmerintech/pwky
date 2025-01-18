import { NavBar } from "./nav/NavBar"
export const Header = () =>{
    return(
<header className={`fixed top-0 w-full md:pl-12 md:pr-12 md:pt-3  
    z-20 p-3 `}>
    <NavBar/>
</header>
    )
}