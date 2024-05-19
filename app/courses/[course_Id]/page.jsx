"use client";

import Wrapper from "@/components/Wrapper";

import { state } from "@/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { fetchCourse } from "@/actions/fetching-course";

import CourseDetails from "./_components/course-details";
import ChapterNamers from "./_components/chapter-names";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import { useAuth } from "@/firebase/auth";

const CoursePage = ({ params }) => {
  const { course_Id } = params;
  const { course, loading } = useSnapshot(state);
  const { authUser } = useAuth();

  useEffect(() => {
    fetchCourse(course_Id);
    fetchEnrolledCourses(authUser);
  }, []);

  return (
    !loading &&
    course && (
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
