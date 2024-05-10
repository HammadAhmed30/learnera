import ChapterHeadline from "./_components/chapter-headline";
import { ChaptersSideBar } from "./_components/chapters-sidebar";

const ChapterPage = ({ params }) => {
  // Functionality to fetch the chapter using params
  console.log(params)
  return (
    <div className="relative">

      <ChapterHeadline/>
    <main className="relative flex">
      <ChaptersSideBar id={params.chapter_Id} course_Id ={params.course_Id} />
      <section className="relative ml-[260px] mt-[60px] h-[2000px] bg-[green] z-[10] w-[100%] flex">asdasd</section>
    </main>
    </div>
  );
};

export default ChapterPage;
