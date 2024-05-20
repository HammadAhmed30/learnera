import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";
import { FaRegCircleCheck } from "react-icons/fa6";

import ChapterWrapper from "@/components/WrapperCourseVideo";
import onChapterComplete from "@/actions/complete-chapter";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";

const ChapterContent = ({
  chapter,
  enrolledCoursesChapters,
  p_enrolledCourse,
  chapter_Id,
  authUser
}) => {
  const updateChapterComplete = () => {
    const updatedChp = p_enrolledCourse[0]?.chapter.map((item) => {
      if (item.slug.current === chapter_Id) {
        return { ...item, isCompleted: !enrolledCoursesChapters?.isCompleted };
      }
      return item;
    });
    onChapterComplete(updatedChp, p_enrolledCourse[0]?.id);

    fetchEnrolledCourses(authUser)

    console.log(updatedChp);
  };

  return (
    <ChapterWrapper className={"pt-2xElementSpace"}>
      <ChapterVideoPlayer src={chapter?.url} />

      <div className=" flex justify-end">
        {!enrolledCoursesChapters?.isCompleted && (
          <button
            className={`flex items-center w-full gap-[5px] mt-ElementSpace md:max-w-[200px] h-[50px] justify-center bg-secondaryColor text-sm font-[500] text-foreground`}
            onClick={() => {
              updateChapterComplete();
            }}
          >
            Mark as Complete <FaRegCircleCheck />
          </button>
        )}
      </div>

      <ChapterDescription description={chapter?.description} />
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

const ChapterDescription = ({ description }) => {
  return (
    <div className="mt-ElementSpace">
      <MediumHeading>Description :</MediumHeading>
      <Paragraph className={"mt-NormalSpace"}>{description}</Paragraph>
    </div>
  );
};
