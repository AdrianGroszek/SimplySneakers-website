import { Link, useParams } from 'react-router-dom'
import { getSingleItemById } from '../productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addItem } from '../cartSlice'

function ProductDetails() {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { gender, imageURL, name, price, size } = useSelector(
        getSingleItemById(+productId)
    )

    const [selectedSize, setSelectedSize] = useState(size[0])

    function handleChangeSize(size) {
        setSelectedSize(size)
    }

    function handleAddItemToCart() {
        const newItem = {
            shoesId: new Date().toISOString(),
            name,
            gender,
            size: selectedSize,
            quantity: 1,
            unitPrice: price,
            totalPrice: price,
            imageURL,
        }

        dispatch(addItem(newItem))
    }

    return (
        <div className="mx-auto mt-8 flex w-4/5 flex-col md:flex-row">
            <div className="w-full md:w-1/2">
                <Link to={-1}>&larr; back</Link>
                <img
                    src={imageURL}
                    alt={name}
                    className="h-auto w-full object-cover md:h-[400px] md:w-[400px]"
                />
            </div>
            <div className="w-full pb-[50px] md:ml-4 md:w-1/2">
                <span className="text-sm text-stone-400">
                    {gender === 'MEN' && "Men's Sneakers"}
                    {gender === 'WOMEN' && "Women's Sneakers"}
                    {gender === 'UNISEX' && 'Unisex Sneakers'}
                </span>
                <h3 className="mb-4 text-xl font-bold">{name}</h3>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam hic doloremque architecto dolores quia odit
                    exercitationem corporis iure voluptates doloribus, ex
                    ducimus ipsam esse laudantium sunt. Voluptatem, doloribus
                    aperiam.
                </p>
                <span className="font-bold">Select Size</span>
                <div className="flex gap-1 border-b border-stone-300 py-4">
                    {size.map((sizeEl, index) => (
                        <button
                            className={`flex h-10 w-10 items-center justify-center rounded-md border border-stone-300 duration-200 hover:bg-stone-200 ${sizeEl === selectedSize && 'bg-stone-200'}`}
                            key={index}
                            onClick={() => handleChangeSize(sizeEl)}
                        >
                            {sizeEl}
                        </button>
                    ))}
                </div>
                <div className="my-3 flex items-center justify-between gap-5">
                    <button
                        className="w-full rounded-md bg-emerald-600 p-2 text-emerald-50 duration-200 hover:bg-emerald-500"
                        onClick={() => handleAddItemToCart()}
                    >
                        ADD TO CART
                    </button>
                    <span className="text-2xl font-bold text-emerald-600">
                        ${price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
