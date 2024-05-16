"use client";

import { ChaptersSideBar } from "./_components/chapters-sidebar";
import { useAuth } from "@/firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import ChapterHeadline from "./_components/chapter-headline";
import ChapterContent from "./_components/chapter-content";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { fetchCourse } from "@/actions/fetching-course";

const ChapterPage = ({ params }) => {

  const {course} = useSnapshot(state)
  const {course_Id, chapter_Id} = params;

  const { authUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname()

  const chapter = course[0]?.chapter.filter(item => item.slug.current === chapter_Id)


  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
    if(course[0]?.slug.current !== course_Id){
      fetchCourse(course_Id);
    }
  }, []);

  return (
    <div className="relative">
      {course.length>0 && <ChapterHeadline chapter_headline={chapter[0]} />}
      <main className="relative flex">
       {course.length>0&& <ChaptersSideBar course={course[0]} chapter_Id={chapter_Id} />}
        <section className="relative mt-[60px] w-full md:w-courseVideoWidth z-[10]">
         {course.length>0 &&  <ChapterContent chapter={chapter[0]} />}
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
