import { CoursesGrid } from "@/components/courses/courses-grid";
import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";


const PopularCourses = () =>{
    return(
        <section className="w-full">
            <MediumHeading>Popular Courses</MediumHeading>
            <Paragraph className={"w-full max-w-[400px] mt-NormalSpace"}>We curate the best videos for specific skills and combine them into courses that rival paid options in quality.</Paragraph>
            <CoursesGrid/>
        </section>
    )
}

export default PopularCourses;