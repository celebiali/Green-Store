import {getProductDetail} from '../../stores/Products';    
import { useDispatch, useSelector } from "react-redux"; 
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {loading, product} = useSelector((state) => state.products);

    useEffect(() => {
        if (id) {
            dispatch(getProductDetail(id));  
        }
    }, [dispatch, id]);

    console.log(product, loading ,"çal");   
    return (
        <div>
            Detail
        </div>
    )
}