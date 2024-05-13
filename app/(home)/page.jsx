"use client";

import Wrapper from "@/components/Wrapper";
import HeroSection from "./_components/hero-section";
import PopularBlogs from "./_components/popular-blogs";
import PopularCourses from "./_components/popular-courses";
import { state } from "@/store";
import { client } from "@/sanity/lib/client";
import { useSnapshot } from "valtio";
import { useEffect } from "react";

const HomePage = () => {
  const fetchCourses = async () => {
    state.loading = true;
    try {
      const courses = await client.fetch(`*[_type == "course"]
        {
            name,
            _id,
            slug,
            image,
            chapter
        }
        `);
        state.courses = courses
    } catch (error) {
      console.log(error);
    } finally {
      state.loading = false;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const {courses} = useSnapshot(state)

  return (
    <>
      <Wrapper>
        <HeroSection />
        <PopularCourses courses={courses} />
        {/* <PopularBlogs /> */}
      </Wrapper>
    </>
  );
};

export default HomePage;
