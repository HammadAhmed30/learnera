import Link from "next/link"

import { SmallHeading } from "../heading/heading-small"
import { Paragraph } from "../reuseable-paragraph"
import { urlForImage } from "@/sanity/lib/image"

export const CoursesCard = ({course}) =>{
    return(
        <Link href={`/courses/${course?.slug.current}`} className="w-full p-[10px] bg-background group">
            <div className="w-full h-[150px] rounded-[5px] bg-[green] overflow-hidden">
                {course&& 
                <img className="w-full h-full object-cover group-hover:scale-[1.05] transition-all" src={urlForImage(course.image)} alt={course.name} />
                }
            </div>
            <SmallHeading>{course ?  course.name.slice(0,52) : "Course Title" }{course.name.length > 52 ? " ..." : ""}</SmallHeading>
            <Paragraph className={"mt-[10px] text-xs italic"}>{course?.chapter.length} {course?.chapter.length >1 ? "Chapters" : "Chapter"}</Paragraph>
        </Link>
    )
}