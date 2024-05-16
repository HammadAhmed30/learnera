"use client";

import Wrapper from "@/components/Wrapper";

import { state } from "@/store";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { urlForImage } from "@/sanity/lib/image";
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
    course && (
      <Wrapper className={"flex justify-between md:flex-row flex-col"}>
        <CourseDetails course={course[0]} />
        <ChapterNamers course={course[0]} />
      </Wrapper>
    )
  );
};

export default CoursePage;
