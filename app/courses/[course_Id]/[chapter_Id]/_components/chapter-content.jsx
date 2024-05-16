import ChapterWrapper from "@/components/WrapperCourseVideo";


const ChapterContent = ({chapter}) =>{




    return(
        <ChapterWrapper className={"pt-2xElementSpace"}>
            <ChapterVideoPlayer src={chapter?.url} />
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