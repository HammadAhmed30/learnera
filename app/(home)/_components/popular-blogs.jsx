import { BlogsGrid } from "@/components/blogs/blogs-grid";
import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";


const PopularBlogs = () =>{
    return(
        <section className="w-full mt-SectionSpace">
            <MediumHeading>Popular Blogs</MediumHeading>
            <Paragraph className={"w-full max-w-[400px] mt-NormalSpace"}>We curate the best videos for specific skills and combine them into courses that rival paid options in quality.</Paragraph>
            <BlogsGrid/>
        </section>
    )
}

export default PopularBlogs;