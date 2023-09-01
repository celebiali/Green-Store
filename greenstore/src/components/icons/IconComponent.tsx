// @ts-ignore
import { FaLock } from 'react-icons/fa';
// @ts-ignore
import { FaClock } from 'react-icons/fa';
// @ts-ignore
import { FaUnlockAlt } from 'react-icons/fa';
interface IconComponentProps{
    iconType: 'fa' | 'fi' | 'ai';
}
export default function IconComponent({iconType}: IconComponentProps) {
   switch (iconType){
       case "fa":
           return <FaLock/>;
       case 'fi':
           return <FaClock />;
       case 'ai':
           return <FaUnlockAlt />;
       default:
           return null;
   }
}
