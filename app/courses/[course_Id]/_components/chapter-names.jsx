"use client";

import { MediumHeading } from "@/components/heading/heading-medium";
import { ChapterNameTag } from "./chapter-name-tag";
import StartCourseButton from "./start-course-btn";

export default function ChapterNamers({ course }) {
  return (
    <div>
      <MediumHeading className={"mb-ElementSpace mt-ElementSpace"}>
        Chapters
      </MediumHeading>
      <div className="border-foreground border-t-[1px] ">
        {course?.chapter?.map((chapter, index) => {
          return <ChapterNameTag key={index} name={chapter.name} />;
        })}
      </div>

      <StartCourseButton
        course_slug={course?.slug.current}
        chapter_slug={course?.chapter[0].slug.current}
      />
    </div>
  );
}
