"use client";

import Wrapper from "@/components/Wrapper";
import HeroSection from "./_components/hero-section";
import PopularBlogs from "./_components/popular-blogs";
import PopularCourses from "./_components/popular-courses";
import { state } from "@/store";
import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { fetchPopularCourses } from "@/actions/fetching-popular-courses";

const HomePage = () => {
  const { popularCourses } = useSnapshot(state);

  useEffect(() => {
    if (popularCourses.length == 0) {
      fetchPopularCourses();
    }
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
