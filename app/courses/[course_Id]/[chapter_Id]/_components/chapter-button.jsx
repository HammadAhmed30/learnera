import Link from "next/link";

export const ChapterButton = ({id, chapterId, link, course_Id, children}) =>{
    return(
        <Link href={`/courses/${course_Id}/${link}`} className={`flex items-center w-full h-[60px] border-b-[1px] border-foreground text-xs font-[300] px-[10px] text-foreground ${chapterId==id?" bg-selectedChapter ":" bg-background "}`} title="Website Development using React and NextJS">{children}</Link>
    )
}

