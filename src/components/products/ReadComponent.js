import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ReadComponent = ({ pno, moveModify, moveList }) => {

    // state.login안에 email
    const { email } = useSelector(state => state.login)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {

            setProduct(data)

            // 삭제 후 뒤로가기했을때 에러처리
        }).catch(e => {
            console.log(e)
            moveList()
        })

    }, [pno])

    return (

        <div>
            <div className="m-2 p-2">
                <div className="m-2 p-2 border-2">
                    {product.pname}
                </div>
                <div className="m-2 p-2 border-2">
                    {product.pdesc}
                </div>
                <div className="m-2 p-2 border-2">
                    {product.price}
                </div>
                <div className="m-2 p-2 border-2">
                    <ul className="list-none">
                        {product.images.map((fname, idx) =>
                            <li key={idx}>
                                <img src={`http://localhost/${fname}`}></img>
                            </li>)}
                    </ul>
                </div>

                <div>
                    <button
                        className="bg-blue-100 border-2 m-2 p-2 font-bold"
                        onClick={() => {
                            // 객체로 email, pno
                            dispatch(addCartThunk({email, pno}))
                        }}
                    >
                        Add Cart
                    </button>
                    <button
                        className="bg-blue-100 border-2 m-2 p-2 font-bold"
                        onClick={() => moveModify(pno)}
                    >
                        modify
                    </button>

                    <button
                        className="bg-blue-100 border-2 m-2 p-2 font-bold"
                        onClick={moveList}
                    >
                        List
                    </button>

                </div>

            </div>
        </div>

    );
}

export default ReadComponent;