"use client";

import {
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { TiStar } from "react-icons/ti";
import { IoIosPlay } from "react-icons/io";

type CourseCardProps = {
  image?: string;
  heading?: string;
  detail?: string;
};

const CourseCard = ({ image, heading, detail }: CourseCardProps) => {
  return (
    <Card
      maxW={{
        base: "full",
        md: "md",
      }}
    >
      <CardBody>
        <Image src={image} alt={heading} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="text-[#0B036B]">
            {heading}
          </Heading>
          <Text>{detail}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup className="flex items-center justify-between w-full">
          <p className="flex items-center gap-2">
            <p className="bg-[#794BFF] rounded-full inline-flex items-center justify-center w-fit p-1 ">
              <IoIosPlay size={16} className="text-[#FFF] " />
            </p>
            <span className="ml-1 font-[600]">12x Lessons</span>
          </p>
          <Button className="bg-[#794BFF] text-white hover:bg-purple-600 transition duration-300 rounded-xl">
            4.9 <TiStar size={24} className="ml-1 text-yellow-400" />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
