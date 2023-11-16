import { IconType } from "react-icons";
type NumCardProps = {
  count: string;
  title: string;
  icon: IconType;
};
const NumCard = ({ count, title, icon: Icon }: NumCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0  w-40  bg-[#FFF] border border-solid border-[#794BFF] text-[#794Bff] px-4 py-8 rounded-lg drop-shadow-xl ">
      <Icon size={24} />
      <p className="flex flex-col text-center ">
        <span className="font-bold"> {count}+</span>{" "}
        <span className="-mt-1">{title}</span>
      </p>
    </div>
  );
};

export default NumCard;
