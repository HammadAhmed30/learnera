"use client";

import Wrapper from "@/components/Wrapper";

import { state } from "@/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { fetchCourse } from "@/actions/fetching-course";

import CourseDetails from "./_components/course-details";
import ChapterNamers from "./_components/chapter-names";

const CoursePage = ({ params }) => {
  const { course_Id } = params;

  const { course } = useSnapshot(state);

  useEffect(() => {
    fetchCourse(course_Id);
  }, []);

  return (
    course[0] && (
      <Wrapper
        className={
          "flex justify-between md:flex-row flex-col gap-ElementSpace "
        }
      >
        <CourseDetails course={course[0]} />
        <ChapterNamers course={course[0]} />
      </Wrapper>
    )
  );
};

export default CoursePage;
