import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/productAPI"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ModifyComponent = ({ pno, moveList, moveRead }) => {

    const fileRef = useRef()
    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        })

    }, [pno])

    const handleClickDelete = () => {

        deleteProduct(pno).then(data => {

            alert("상품삭제")

        })

    }

    const handleChange = (e) => {

        product[e.target.name] = e.target.value

        setProduct({ ...product })

    }

    const handleClickModify = () => {

        const formData = new FormData()

        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)
        
        // product에 image가 있다면
        // 원본파일은 images라는 이름으로 추가 새로운 파일은 files로 날아간다.
        if (product.images) {
            for (let pi of product.images) {
                formData.append("images", pi)
                
            }
        }

        // 안에 files가있음
        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }

        putProduct(formData).then(data => {

            alert("수정되었습니다.")
            moveRead(pno)

        })
    }

    const handleClickDelImg = (fname) => {

        const newArr = product.images.filter(ele => ele !== fname)

        product.images = newArr
        setProduct({...product})

    }


    return (
        <div>
            <div className="m-2 p-2">
                <div className="m-2 p-2 border-2">
                    {product.pno}
                </div>
                <div className="m-2 p-2 border-2">
                    <input
                        type='text'
                        name='pname'
                        value={product.pname}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="m-2 p-2 border-2">
                    <input
                        type='text'
                        name='pdesc'
                        value={product.pdesc}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="m-2 p-2 border-2">
                    <input
                        type='number'
                        name='price'
                        value={product.price}
                        onChange={handleChange}
                    ></input>
                </div>


                <div className="m-2 p-2 border-2">
                    <input type='file' ref={fileRef} multiple name='images'></input>
                </div>


                <div className="m-2 p-2 border-2">
                    <ul className="list-none flex">
                        {product.images.map((fname, idx) =>
                            <li
                                key={idx}
                                className="m-2"
                            >
                                <button 
                                className="bg-gray-500 m-2 p-2 text-white"
                                onClick={() => handleClickDelImg(fname)}
                                >X</button>
                                <img src={`http://localhost/s_${fname}`}></img>
                                
                            </li>)}
                    </ul>
                </div>
                <button
                    className="bg-fuchsia-600 border-2 m-2 p-2 font-bold text-white"
                    onClick={handleClickModify}
                >
                    Modify
                </button>

                <button
                    className="bg-blue-100 border-2 m-2 p-2 font-bold"
                    onClick={moveList}
                >
                    List
                </button>

                <button
                    className="bg-red-500 border-2 m-2 p-2 font-bold text-white"
                    onClick={handleClickDelete}
                >
                    Remove
                </button>
            </div>
        </div>

    );
}

export default ModifyComponent;