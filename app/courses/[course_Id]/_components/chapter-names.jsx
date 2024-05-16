import { ChapterNameTag } from "./chapter-name-tag";

export default function ChapterNamers({course}) {
  return (
    <div className="border-foreground border-l-[1px] border-t-[1px] ">
        {course?.chapter?.map((chapter,index)=>{
            return <ChapterNameTag key={index} name={chapter.name}  />
        })}
    </div>
  )
}

