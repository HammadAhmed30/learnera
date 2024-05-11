import ChapterWrapper from "@/components/WrapperCourseVideo";


const ChapterContent = () =>{
    return(
        <ChapterWrapper className={"pt-2xElementSpace"}>
            <ChapterVideoPlayer src={"https://www.youtube.com/embed/N_uNKAus0II?si=RV11F9CeFrcAY8P_"} />
        </ChapterWrapper>
    )
}

export default ChapterContent;


const ChapterVideoPlayer = ({src}) =>{
    return(
        <iframe className="w-full h-[500px] object-contain border-[1px] border-foreground" src={src}></iframe>
    )
}

const ChapterDescription = () =>{
    return(
        <div></div>
    )
}