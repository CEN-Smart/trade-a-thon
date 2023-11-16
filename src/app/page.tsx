import Container from "@/components/Container";
import NumCard from "@/components/cards/NumCard";
import HeroSection from "@/components/hero/HeroSection";
import { TbClockHour3 } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { FaGlobeAsia } from "react-icons/fa";
import CourseCard from "@/components/cards/CourseCard";
import ScrollToTopButton from "@/lib/ScrollToTop";
import Heading from "@/components/hero/Heading";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container className="flex lg:w-1/2 w-full -mt-[4rem] items-start overflow-x-scroll gap-2 justify-between lg:-mt-[5.5rem] z-30 py-4 relative">
        <NumCard count={`60,000`} title="Hours content" icon={TbClockHour3} />
        <NumCard count={`1,000,000`} title="Students" icon={IoIosPeople} />
        <NumCard count={`110`} title="Countries" icon={FaGlobeAsia} />
      </Container>
      <Container className="py-32 ">
        <h1 className="w-full md:w-1/2 mx-auto text-center pb-5">
          <Heading
            textColor="text-gray-700"
            className="text-2xl md:text-4xl xl:text-5xl text-[#575199]"
            heading="Our Popular Courses"
            title="Lorem ipsum dolor sit amet, in sed integer. Scelerisque nam evget imperdiet accumsan, ipsum  turpis cursus. In elit amet, tortor nunc."
          />
        </h1>
        <div className=" grid grid-cols-responsive place-items-center  gap-4">
          <CourseCard
            image="/images/writing.jpg"
            heading="Creative writing"
            detail="Creative Writing : Creative writing is
 any writing that goes outside 
the bounds of normal professional "
          />
          <CourseCard
            image="/images/writing.jpg"
            heading="Creative writing"
            detail="Creative Writing : Creative writing is
 any writing that goes outside 
the bounds of normal professional "
          />
          <CourseCard
            image="/images/writing.jpg"
            heading="Creative writing"
            detail="Creative Writing : Creative writing is
 any writing that goes outside 
the bounds of normal professional "
          />
        </div>
      </Container>
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
