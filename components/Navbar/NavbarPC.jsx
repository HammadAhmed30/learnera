import Link from "next/link";
import LinkTag from "./LinkTag";

const ListOfLinks = [
    {
        href:"/courses",
        name:"Courses",
    },
    {
        href:"/coming-soon",
        name:"Blogs",
    },
    {
        href:"/coming-soon",
        name:"Community",
    },
]

const NavbarForDesktop = () =>{
    return(
        <nav className="flex justify-between border-b-[1px] border-foreground w-full h-[75px] items-center">
            <div className="h-full border-r w-[160px] flex justify-center items-center">
                <Link href={"/"} className="text-2xl text-center text-foreground font-[600] cursor-pointer">Learner</Link>
            </div>
            <div className="gap-[20px] flex">
                {
                    ListOfLinks.map((item,index)=>(
                        <LinkTag key={index} link={item.href} name={item.name} />
                    ))
                }
            </div>
            <div className="h-full bg-foreground w-[160px] flex justify-center items-center">
                <button className="text-center text-sm text-text-color font-[600]">Log In</button>
            </div>
        </nav>
    )
}

export default NavbarForDesktop;