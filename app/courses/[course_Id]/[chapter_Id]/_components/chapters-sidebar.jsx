import { ChapterButton } from "./chapter-button";

const ChapterLists = [
  {
    name: "CH1 : Website Development...",
    link: "/1",
    id: 1,
  },
  {
    name: "CH2 : Website Development...",
    link: "/2",
    id: 2,
  },
  {
    name: "CH3 : Website Development...",
    link: "/3",
    id: 3,
  },
  {
    name: "CH4 : Website Development...",
    link: "/4",
    id: 4,
  },
  {
    name: "CH5 : Website Development...",
    link: "/5",
    id: 5,
  },
  {
    name: "CH6 : Website Development...",
    link: "/6",
    id: 6,
  },
  {
    name: "CH7 : Website Development...",
    link: "/7",
    id: 7,
  },
];

export const ChaptersSideBar = ({ id, course_Id }) => {
  return (
    <div className="fixed md:relative left-[-265px] top-0 md:left-0 w-[260px] border-foreground">
      <CourseNameTag />
      {ChapterLists.map((chapter, index) => (
        <ChapterButton
          key={index}
          id={id}
          chapterId={chapter.id}
          link={chapter.link}
          course_Id={course_Id}
        >
          {chapter.name}
        </ChapterButton>
      ))}
    </div>
  );
};

const CourseNameTag = () => {
  return (
    <div
      className="flex items-center w-full h-[60px] border-r-[1px] border-b-[1px] border-foreground text-sm font-[500] px-[10px] text-foreground"
      title="Website Development using React and NextJS"
    >
      Website Development ...
    </div>
  );
};
