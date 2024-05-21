"use client";

import Wrapper from "@/components/Wrapper";
import CoursesPageHeading from "./_components/courses-page-heading";

import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { fetchCourses } from "@/actions/fetching-courses";
import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import { useAuth } from "@/firebase/auth";

const CoursesPage = () => {
  const { courses } = useSnapshot(state);

  useEffect(() => {
    document.title = "Courses | Learera Uni";

    if (courses.length == 0) {
      fetchCourses();
    }
  }, []);

  return (
    <Wrapper>
      <CoursesPageHeading courses={courses} />
    </Wrapper>
  );
};

export default CoursesPage;
