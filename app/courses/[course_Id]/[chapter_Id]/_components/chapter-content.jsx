import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";

import ChapterWrapper from "@/components/WrapperCourseVideo";

const ChapterContent = ({ chapter }) => {
  return (
    <ChapterWrapper className={"pt-2xElementSpace"}>
      <ChapterVideoPlayer src={chapter?.url} />
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
  return <div className={"mt-ElementSpace"}>
    <MediumHeading>Description{" "}:</MediumHeading>
    <Paragraph className={"mt-NormalSpace"}>{description}</Paragraph>
  </div>;
};
