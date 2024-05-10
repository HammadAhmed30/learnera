import { MediumHeading } from "../heading/heading-medium";
import { SmallHeading } from "../heading/heading-small";
import { Links } from "../links";
const { Paragraph } = require("../reuseable-paragraph");

import Wrapper from "../Wrapper";

const MediaLinks = [
  {
    name: "Twitter",
    link: "/",
  },
  {
    name: "Twitter",
    link: "/",
  },
  {
    name: "Twitter",
    link: "/",
  },
  {
    name: "Twitter",
    link: "/",
  },
];

const Footer = ({ className }) => {
  return (
    <Wrapper className={"w-full mt-SectionSpace " + className || ""}>
      {/* Upper Footer Section */}
      <section className="pb-2xElementSpace border-b-[1px] border-foreground flex justify-between">
        <CompanyDescription />
        <WebsiteLinks />
        <NewsLetterTab />
      </section>
      {/* Lower Footer Section */}
      <section className="py-ElementSpace">
        <MediaLinksComponents />
      </section>
    </Wrapper>
  );
};

export default Footer;

// Upper Footer Components
const CompanyDescription = () => {
  return (
    <div>
      <h1 className="text-2xl text-foreground font-[600]">Learner</h1>
      <Paragraph className={"w-full md:w-[300px] mt-NormalSpace"}>
        We curate the best videos for specific skills and combine them into
        courses that rival paid options in quality.
      </Paragraph>
    </div>
  );
};

const WebsiteLinks = () => {
  return (
    <div className="flex justify-between gap-[30px]">
      <div className="flex flex-col gap-NormalSpace">
        <SmallHeading>LEARNING</SmallHeading>
        <Links link={"/courses"}>Courses</Links>
        <Links link={"/coming-soon"}>Blogs</Links>
        <Links link={"/coming-soon"}>Community</Links>
      </div>
      <div className="flex flex-col gap-NormalSpace">
        <SmallHeading>ABOUT</SmallHeading>
        <Links link={"/coming-soon"}>Read Me</Links>
        <Links link={"/coming-soon"}>Hire a Teacher</Links>
        <Links link={"/coming-soon"}>Hire a Freelancer</Links>

        <Links link={"/coming-soon"}>Bug</Links>
      </div>
    </div>
  );
};

const NewsLetterTab = () => {
  return (
    <div>
      <MediumHeading>NewsLetter</MediumHeading>
      <form className="flex items-center mt-NormalSpace">
        <input
          className="bg-background text-foreground h-[40px] w-[200px] text-sm font-[300] outline-none px-[7px] border-[1px] border-foreground"
          type="text"
          placeholder="Search for a course"
        />
        <button className="bg-secondaryColor h-[40px] w-[60px] text-xs">
          Go
        </button>
      </form>
    </div>
  );
};

// Lower Footer Components
const MediaLinksComponents = () => {
  return (
    <div className="flex justify-center items-center gap-[15px]">
      {MediaLinks.map((item, index) => {
        return (
          <Links key={index} link={item.link}>
            <div className="w-[30px] h-[30px] rounded-full bg-foreground"></div>
          </Links>
        );
      })}
    </div>
  );
};
