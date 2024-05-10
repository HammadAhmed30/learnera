import Link from "next/link"


const LinkTag = ({link,name})=>{
    return(
        <Link className="text-foreground text-xs font-[300]" href={link}>{name}</Link>
    )
}

export default LinkTag;