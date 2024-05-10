import { LargeHeading } from "@/components/heading/heading-large";
import { Paragraph } from "@/components/reuseable-paragraph";

const HeroSection = () => {
  return (
    // Change that hard written style to a variable thing in tailwind, idk how to do this.....
    <section
      style={{ height: "calc(100vh - 75px)" }}
      className="w-full flex items-center"
    >
        <HeroSectionTopPart/>
    </section>
  );
};

export default HeroSection;


const HeroSectionTopPart = () =>{
    return(
        <div>
            <LargeHeading className={"leading-[110%]"}>Learn Anytohng Pay<br />Nothing</LargeHeading>          
            <Paragraph className={"w-full max-w-[400px] mt-NormalSpace"}>We curate the best videos for specific skills and combine them into courses that rival paid options in quality.</Paragraph>  
            <ul className="text-sm text-foreground font-[400] my-ElementSpace">
                <li>- Master in-demand skills for free</li>
                <li>- Join a vibrant learning community</li>
                <li>- Flexible learning at your fingertips</li>
            </ul>
            <SeacrhCourseTab/>
        </div>
    )
}

const SeacrhCourseTab = () =>{
    return(
        <form className="flex items-center">
            <input className="bg-background text-foreground h-[50px] w-[300px] text-sm font-[300] outline-none px-[10px] border-[1px] border-foreground" type="text" placeholder="Search for a course" />
            <button className="bg-secondaryColor h-[50px] w-[80px]">Go</button>
        </form>
    )
}