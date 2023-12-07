import { FaLock } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { CgCardHearts } from "react-icons/cg";
import IconDto from "../../models/components/IconDto.ts";
export default function IconComponent({ iconType }: IconDto) {
  switch (iconType) {
    case "fa":
      return <FaLock />;
    case "ai":
      return <AiFillCar />;
    case "cg":
      return <CgCardHearts />;
    default:
      return null;
  }
}
