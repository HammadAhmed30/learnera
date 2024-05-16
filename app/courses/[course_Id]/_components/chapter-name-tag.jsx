
export const ChapterNameTag = ({name}) =>{
    return(
        <span className={`flex items-center w-full h-[60px] border-r-[1px] border-b-[1px] border-foreground text-xs font-[300] px-[10px] text-foreground `} title={name}>{name.slice(0,30)}{name.length > 30 ? " ..." : ""}</span>
    )
}