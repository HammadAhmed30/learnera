import React from "react";
import { ChapterButton } from "./chapter-button";

export default function ChapterSideBarContent({
  course,
  chapter_Id,
  p_enrolledCourse,
}) {
  return (
    <div className="mt-[62px] border-foreground h-full border-t ">
      <div className="w-full">
        <CourseNameTag courseName={course?.name} />
        {course?.chapter.map((chapter, index) => (
          <ChapterButton
          className=" border-r-[0px] "
            key={index}
            course={course}
            chapter_Id={chapter_Id}
            chapter={chapter}
            isComp={p_enrolledCourse?.chapter[index].isCompleted}
          />
        ))}
      </div>
    </div>
  );
}

const CourseNameTag = ({ courseName }) => {
  return (
    courseName && (
      <div
        className="flex items-center w-full h-[60px] border-r-0 border-b-[1px] border-foreground text-sm font-[500] px-[10px] text-foreground"
        title={courseName}
      >
        {courseName.slice(0, 25)}
        {courseName.length > 25 ? " ..." : ""}
      </div>
    )
  );
};
