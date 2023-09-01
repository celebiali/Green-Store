import {BiSolidQuoteAltLeft} from "react-icons/bi";
import img from '../../../public/images/plants-store-testimonial-avatar-img.jpg'
import img1 from '../../../public/images/plants-store-testimonials-avatar-img-1.jpg'
import img2 from '../../../public/images/plants-store-testimonials-avatar-img-2.jpg'

interface CommentsProps{
    title: string
    imageUrl: string;
    username: string;
}
function Comments({title,imageUrl,username}:CommentsProps) {

    switch (imageUrl) {
        case  img:
            imageUrl = img
            break
        case img1:
            imageUrl = img1
            break
        case img2:
            imageUrl = img2
            break
    }
    return (
        <>
            <div>
                <BiSolidQuoteAltLeft/>
            </div>
            <div>
                <img src={imageUrl} alt={title} />
            </div>
            <div>
                {title}
            </div>
            <div>
                {username}
            </div>
        </>
    );
}

export default Comments;