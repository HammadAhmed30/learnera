import Link from "next/link"


const LinkTag = ({onClick, link,name})=>{
    return(
        <Link onClick={onClick} className="text-foreground md:text-xs text-sm font-[300]" href={link}>{name}</Link>
    )
}

export default LinkTag;