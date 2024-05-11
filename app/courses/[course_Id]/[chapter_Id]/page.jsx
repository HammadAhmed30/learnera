"use client";

import { ChaptersSideBar } from "./_components/chapters-sidebar";
import { useAuth } from "@/firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import ChapterHeadline from "./_components/chapter-headline";
import ChapterContent from "./_components/chapter-content";

const ChapterPage = ({ params }) => {
  // Functionality to fetch the chapter using params

  const { authUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname()


  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
  }, []);

  return (
    <div className="relative">
      <ChapterHeadline />
      <main className="relative flex">
        <ChaptersSideBar id={params.chapter_Id} course_Id={params.course_Id} />
        <section className="relative mt-[60px] w-full md:w-courseVideoWidth z-[10]">
          <ChapterContent />
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
