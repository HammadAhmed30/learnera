import WrapperForBlog from "@/components/WrapperForBlog";
import { MediumHeadingx2 } from "@/components/heading/2x-medium-heading";

import { LargeHeading } from "@/components/heading/heading-large";
import { Paragraph } from "@/components/reuseable-paragraph";

export default function ReadMePage() {
  return (
    <WrapperForBlog className={"mt-SectionSpace"}>
      <img
        src="/EB-logo.png"
        className="md:h-[120px] h-[100px] mb-SectionSpace mx-auto"
        alt=""
      />
      <MediumHeadingx2>Read Me!</MediumHeadingx2>
      <Paragraph className={"mt-ElementSpace"}>
        This website is a project for people who cannot afford expensive courses
        and don't know where to start or what to do next. I faced the same
        problem when I began learning to code. I spent a year on just HTML and
        CSS without proper guidance. I created this website so you don't have to
        waste much time. All the courses here are developed after extensive
        research and expert advice. With these free YouTube courses, you'll be
        able to start your journey.
      </Paragraph>
      <MediumHeadingx2 className={"mt-2xElementSpace"}>
        Important Note :
      </MediumHeadingx2>
      <Paragraph className={"mt-ElementSpace "}>
        All these videos are from YouTube, and a huge shoutout to YouTube and
        the creators of these videos. You can also watch them directly on
        YouTube, and don't forget to subscribe to the creators. This website is
        built on top of YouTube, so be sure to check out youtube.com.
      </Paragraph>
      <MediumHeadingx2 className={"mt-2xElementSpace"}>
        Courses :
      </MediumHeadingx2>
      <Paragraph className={"mt-ElementSpace"}>
        If you're an expert in your field and want to collaborate with us, you
        can contact us via email at
        <a
          className="text-secondaryColor opacity-[.6] hover:opacity-[1] transition-all"
          href="mailto:30lazers@gmail.com"
        >
          {" "}
          30lazers@gmail.com
        </a>
        . Send us an email with a complete roadmap and YouTube video links. If
        we use your course, you will be mentioned in the course along with your
        Instagram or YouTube handle.
      </Paragraph>
      <MediumHeadingx2 className={"mt-2xElementSpace"}>
        Company :
      </MediumHeadingx2>
      <Paragraph className={"mt-ElementSpace"}>
        This website is owned by Etralbit. Also, one last thing: This website is
        up for sale. If anyone is interested, you can contact me at my email:
        <a
          className="text-secondaryColor opacity-[.6] hover:opacity-[1] transition-all"
          href="mailto:30lazers@gmail.com"
        >
          {" "}
          30lazers@gmail.com
        </a>
        .
      </Paragraph>
    </WrapperForBlog>
  );
}
