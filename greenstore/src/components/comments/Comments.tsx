interface CommentsProps{
    title: string
    imageUrl: string;
    username: string;
}
function Product({title,imageUrl,username}:CommentsProps) {
    return (
        <>
            <div>
                {imageUrl}
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

export default Product;