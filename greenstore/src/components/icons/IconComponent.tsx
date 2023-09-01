// @ts-ignore
import { FaLock } from 'react-icons/fa';
// @ts-ignore
import { AiFillCar } from 'react-icons/ai';
// @ts-ignore
import { CgCardHearts } from 'react-icons/cg';
interface IconComponentProps{
    iconType: 'fa' | 'ai' | 'cg';
}
export default function IconComponent({iconType}: IconComponentProps) {
   switch (iconType){
       case "fa":
           return <FaLock/>;
       case 'ai':
           return <AiFillCar />;
       case 'cg':
           return <CgCardHearts />;
       default:
           return null;
   }
}
