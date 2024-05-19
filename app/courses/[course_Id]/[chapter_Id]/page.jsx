"use client";

import { ChaptersSideBar } from "./_components/chapters-sidebar";
import { useAuth } from "@/firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";

import ChapterHeadline from "./_components/chapter-headline";
import ChapterContent from "./_components/chapter-content";

const ChapterPage = ({ params }) => {
  const { authUser } = useAuth();
  const { chapter_Id } = params;
  const { course } = useSnapshot(state);

  const router = useRouter();
  const pathname = usePathname();

  const chapter = course[0]?.chapter.filter(
    (item) => item.slug.current === chapter_Id
  );

  useEffect(() => {
    if (!authUser) {
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
  }, []);

  return (
    <div className="relative">
      {course.length > 0 && <ChapterHeadline chapter_headline={chapter[0]} />}

      <main className="relative flex">
        {course.length > 0 && (
          <ChaptersSideBar course={course[0]} chapter_Id={chapter_Id} />
        )}
        <section className="relative mt-[60px] w-full md:w-courseVideoWidth z-[10]">
          {course.length > 0 && <ChapterContent chapter={chapter[0]} />}
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
