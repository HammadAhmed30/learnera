import { state } from "@/store";
import Link from "next/link";

export const ChapterButton = ({
  className,
  course,
  chapter,
  chapter_Id,
  isComp,
}) => {
  console.log(isComp);
  return (
    <Link
      onClick={() => (state.sideMenu = false)}
      href={`/courses/${course?.slug.current}/${chapter?.slug.current}`}
      className={`flex items-center w-full h-[60px] border-r-[1px] border-b-[1px] border-foreground text-xs font-[300] px-[10px] text-foreground ${chapter?.slug.current == chapter_Id && !isComp ? " bg-selectedChapter " : " bg-background "}  ${isComp ? "bg-chpCompletion" : ""} ${className || ""} `}
      title={chapter.name}
    >
      {chapter.name.slice(0, 30)}
      {chapter.name.length > 30 ? " ..." : ""}
    </Link>
  );
};
