import Link from "next/link"


export const Links = ({children,link}) =>{
    return(
        <Link className="text-foreground text-xs font-[300]" href={link}>{children}</Link>
    )
}