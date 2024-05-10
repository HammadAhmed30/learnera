import { SmallHeading } from "../heading/heading-small"
import { Paragraph } from "../reuseable-paragraph"

export const BlogsCard = () =>{
    return(
        <div className="w-full p-[10px] bg-background">
            <div className="w-full h-[150px] rounded-[5px] bg-[green]"></div>
            <SmallHeading>Websiite Development - React, NextJS, javascript</SmallHeading>
        </div>
    )
}