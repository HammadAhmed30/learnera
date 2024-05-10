import Wrapper from "@/components/Wrapper";
import HeroSection from "./_components/hero-section";
import PopularBlogs from "./_components/popular-blogs";
import PopularCourses from "./_components/popular-courses";

const HomePage = () =>{
  return(
    <>
    <Wrapper>
      <HeroSection/>
      <PopularCourses/>
      <PopularBlogs/>
    </Wrapper>
    </>
  )
}


export default HomePage;
