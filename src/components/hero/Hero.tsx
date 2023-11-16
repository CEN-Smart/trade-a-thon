import Link from "next/link";
import Container from "../Container";
import Heading from "./Heading";
import { MdPlayArrow } from "react-icons/md";

const Hero = () => {
  return (
    <section className="pt-32 pb-6 text-white ">
      <Container className=" flex items-center gap-12 flex-col md:flex-row ">
        <div className="w-full md:w-1/2 rounded-md overflow-hidden">
          <picture>
            <img
              src="/images/hero.png"
              alt="Image of a lady learning from a laptop"
              className="w-auto h-auto object-cover"
            />
          </picture>
        </div>
        <div className="flex-1 flex flex-col justify-start gap-6">
          <Heading
            textColor="text-white/70"
            className="text-3xl md:text-4xl xl:text-6xl"
            heading="A revolutionary
          way to educate."
            title="Online education is electronically supported learning that
 relies on the Internet for teacher/student interaction and
 the distribution of class materials."
          />
          <Link
            href="/about"
            className="text-white/70 px-4 py-2 rounded-md w-fit flex items-center gap-2 mt-auto sm:mt-4 lg:mt-20"
          >
            <span className=" bg-white rounded-full">
              <MdPlayArrow color="black" size={24} />
            </span>
            <span>What&apos;s Trade a thon?</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
