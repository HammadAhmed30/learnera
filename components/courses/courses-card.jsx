import Link from "next/link"
import { SmallHeading } from "../heading/heading-small"
import { Paragraph } from "../reuseable-paragraph"

export const CoursesCard = () =>{
    return(
        <Link href={"/courses/1"} className="w-full p-[10px] bg-background">
            <div className="w-full h-[150px] rounded-[5px] bg-[green]"></div>
            <SmallHeading>Websiite Development - React, NextJS, javascript</SmallHeading>
            <Paragraph className={"mt-[10px] text-xs italic"}>24 Chapters</Paragraph>
        </Link>
    )
}