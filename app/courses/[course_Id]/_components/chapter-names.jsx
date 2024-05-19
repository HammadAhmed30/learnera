"use client";

import { MediumHeading } from "@/components/heading/heading-medium";
import { ChapterNameTag } from "./chapter-name-tag";
import StartCourseButton from "./start-course-btn";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import EnrollInCourse from "@/actions/enrolling-courses";
import { useAuth } from "@/firebase/auth";

export default function ChapterNamers({ course }) {


  const { enrolledCourses } = useSnapshot(state);
  const { authUser } = useAuth();

  useEffect(() => {
    fetchEnrolledCourses(authUser);
  }, []);

  const isEnrolled = enrolledCourses.some(
    (item) => item._id === course._id
  );

  const getEnrollInCourse = () => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
    EnrollInCourse(course, authUser, enrolledCourses);
    fetchEnrolledCourses(authUser);
  };


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

      {isEnrolled ? (
        <StartCourseButton
          course_slug={course?.slug.current}
          chapter_slug={course?.chapter[0].slug.current}
        />
      ) : (
        <button
          className="flex items-center w-full h-[60px] justify-center mt-ElementSpace bg-secondaryColor text-sm font-[500] px-[10px] text-foreground md:min-w-[300px]"
          onClick={getEnrollInCourse}
        >
          Click to Enroll
        </button>
      )}
    </div>
  );
}
