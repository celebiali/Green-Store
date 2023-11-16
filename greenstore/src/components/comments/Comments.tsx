import { BiSolidQuoteAltLeft } from "react-icons/bi";
import img from "../../../public/images/comments1.jpg";
import img1 from "../../../public/images/comments2.jpg";
import img2 from "../../../public/images/comments3.jpg";
import CommentsDto from "../../models/components/CommentsDto.ts";

function Comments({ title, src, username }: CommentsDto) {
  let selectedImage;

  switch (src) {
    case "img":
      selectedImage = img;
      break;
    case "img1":
      selectedImage = img1;
      break;
    case "img2":
      selectedImage = img2;
      break;
    default:
      selectedImage = img1;
      break;
  }

  return (
    <div className="comments_components">
      <div className="icon">
        <BiSolidQuoteAltLeft />
      </div>
      <div className="title">{title}</div>
      <div className="img">
        <img src={selectedImage} alt={title} />
      </div>
      <div className="username">
        <span>{username}</span>
      </div>
    </div>
  );
}

export default Comments;
