import { MediumHeadingx2 } from "@/components/heading/2x-medium-heading";
import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";
import { urlForImage } from "@/sanity/lib/image";

export default function CourseDetails({ course }) {
  return (
    <div className="mt-ElementSpace">
      <div className="w-full h-[470px]">
        {course && (
          <img
            className="w-full h-full object-cover border-[1px] border-foreground"
            src={urlForImage(course.image)}
          />
        )}
      </div>
      <MediumHeadingx2 className={"mt-ElementSpace"}>
        {course?.name}
      </MediumHeadingx2>
      <MediumHeading className={"mt-ElementSpace underline"}>Description{" "}:</MediumHeading>
      <Paragraph className={"mt-NormalSpace"}>{course?.description}</Paragraph>
    </div>
  );
}
