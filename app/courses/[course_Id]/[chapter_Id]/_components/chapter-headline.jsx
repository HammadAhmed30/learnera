const ChapterHeadline = ({chapter_headline}) =>{
    return(
        <div className="absolute top-[0px] left-0 md:left-[260px] flex items-center right-0 h-[60px] border-b-[1px] border-foreground text-sm font-[500] px-[20px] text-foreground" title="Website Development using React and NextJS">{"=>"} {chapter_headline.name}</div>
    )
}


export default ChapterHeadline