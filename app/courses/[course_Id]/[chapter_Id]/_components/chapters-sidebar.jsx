import { ChapterButton } from "./chapter-button";



export const ChaptersSideBar = ({ course,chapter_Id }) => {
  return (
    <div className="fixed md:relative left-[-265px] top-0 md:left-0 w-[260px] border-foreground">
      <CourseNameTag courseName={course?.name} />
      {course?.chapter.map((chapter, index) => (
        <ChapterButton
          key={index}
          course={course}
          chapter_Id={chapter_Id}
          chapter={chapter} />
      ))}
    </div>
  );
};

const CourseNameTag = ({courseName}) => {
  return (
    courseName && <div
      className="flex items-center w-full h-[60px] border-r-[1px] border-b-[1px] border-foreground text-sm font-[500] px-[10px] text-foreground"
      title={courseName}>{courseName.slice(0,25)}{courseName.length > 25 ? " ..." : ""}
    </div>
  );
};
