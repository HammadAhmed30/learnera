import { CoursesGrid } from "@/components/courses/courses-grid";
import { Paragraph } from "@/components/reuseable-paragraph";

const { LargeHeading } = require("@/components/heading/heading-large")



const CoursesPageHeading = () =>{
    return(
        <section className="w-full mt-SectionSpace flex flex-col items-center">
            <LargeHeading className={"text-center"}>Courses</LargeHeading>
            <Paragraph className={"w-full max-w-[400px] text-center mt-NormalSpace"}>You can select any of the following careers to make a good living, these are the full courses you would require to land your first internship.</Paragraph>
            <SearchCoures/>
            <CoursesGrid className={"mt-SectionSpace"}/>
        </section>
    )
}

export default CoursesPageHeading;


const SearchCoures = () => {
    return(
        <input className="bg-background mt-ElementSpace text-foreground h-[40px] w-full max-w-[400px] text-sm font-[300] outline-none px-[10px] border-[1px] border-foreground" type="text" placeholder="Search for a course" />
    )
}