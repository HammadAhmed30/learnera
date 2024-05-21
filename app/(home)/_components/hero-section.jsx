import { LargeHeading } from "@/components/heading/heading-large";
import { Paragraph } from "@/components/reuseable-paragraph";
import Link from "next/link";

const HeroSection = () => {
  return (
    // Change that hard written style to a variable thing in tailwind, idk how to do this.....
    <section
      style={{ height: "calc(100vh - 75px)" }}
      className="w-full flex items-center"
    >
      <HeroSectionTopPart />
    </section>
  );
};

export default HeroSection;

const HeroSectionTopPart = () => {
  return (
    <div>
      <LargeHeading className={"leading-[110%]"}>
        Learn Anything Pay
        <br />
        Nothing
      </LargeHeading>
      <Paragraph className={"w-full max-w-[400px] mt-ElementSpace"}>
      We provide a complete roadmap along with YouTube videos to help you throughout your learning.
      </Paragraph>
      <ul className="text-sm text-foreground font-[400] my-ElementSpace">
        <li>- Master in-demand skills for free</li>
        <li>- Join a vibrant learning community</li>
        <li>- Flexible learning at your fingertips</li>
      </ul>
      <div>
        <button
          className={`flex mt-ElementSpace items-center w-[100%] md:max-w-[200px] h-[50px] justify-center bg-secondaryColor text-sm font-[500] text-foreground `}
        >
          <Link href={"/courses"}>See Courses</Link>
        </button>
      </div>
    </div>
  );
};
