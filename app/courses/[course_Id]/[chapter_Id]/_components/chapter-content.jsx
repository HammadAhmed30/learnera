import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";
import { FaRegCircleCheck } from "react-icons/fa6";

import ChapterWrapper from "@/components/WrapperCourseVideo";

const ChapterContent = ({ chapter }) => {
  return (
    <ChapterWrapper className={"pt-2xElementSpace"}>
      <ChapterVideoPlayer src={chapter?.url} />
      <div className=" flex justify-end">

      <button
          className={`flex items-center w-full gap-[5px] my-ElementSpace md:max-w-[200px] h-[50px] justify-center bg-secondaryColor text-sm font-[500] text-foreground`}
          // onClick={signOutHandler}
        >
          Mark as Complete {" "}
          <FaRegCircleCheck />

        </button>
      </div>
      <ChapterDescription description= {chapter?.description} />
    </ChapterWrapper>
  );
};

export default ChapterContent;

const ChapterVideoPlayer = ({ src }) => {
  return (
    <iframe
      className="w-full h-[500px] object-contain border-[1px] border-foreground"
      src={src}
    ></iframe>
  );
};

const ChapterDescription = ({description}) => {
  return <div>
    <MediumHeading>Description{" "}:</MediumHeading>
    <Paragraph className={"mt-NormalSpace"}>{description}</Paragraph>
  </div>;
};
