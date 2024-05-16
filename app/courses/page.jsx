"use client";

import Wrapper from "@/components/Wrapper";
import CoursesPageHeading from "./_components/courses-page-heading";

import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { fetchCourses } from "@/actions/fetching-courses";

const CoursesPage = () => {
  const { courses } = useSnapshot(state);

  useEffect(() => {
    if (courses.length==0) {
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
