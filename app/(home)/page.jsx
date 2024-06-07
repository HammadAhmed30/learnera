"use client";

import { state } from "@/store";
import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { fetchPopularCourses } from "@/actions/fetching-popular-courses";
import { useAuth } from "@/firebase/auth";

import fetchEnrolledCourses from "@/actions/fetching-enrolled-courses";
import Wrapper from "@/components/Wrapper";
import HeroSection from "./_components/hero-section";
import PopularCourses from "./_components/popular-courses";

const HomePage = () => {
  const { authUser } = useAuth();

  const { popularCourses } = useSnapshot(state);

  useEffect(() => {
    if (!!authUser) {
      fetchEnrolledCourses(authUser);
    }
  }, [authUser]);

  useEffect(() => {
    if (popularCourses.length == 0) {
      fetchPopularCourses();
    }

    document.title = "Learnera Uni | Home Page";
  }, []);

  return (
    <>
      <Wrapper>
        <HeroSection />
        <PopularCourses courses={popularCourses} />
        {/* <PopularBlogs /> */}
      </Wrapper>
    </>
  );
};

export default HomePage;
