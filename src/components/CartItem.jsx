import { useDispatch } from 'react-redux'
import { decreaseQuantity, deleteItem, increaseQuantity } from '../cartSlice'
import { FaTrashAlt } from 'react-icons/fa'

function CartItem({ item }) {
    const dispatch = useDispatch()

    function handleDeleteItem(id) {
        dispatch(deleteItem(id))
    }

    function handleIncreaseQuantity(id) {
        dispatch(increaseQuantity(id))
    }

    function handleDecreaseQuantity(id) {
        dispatch(decreaseQuantity(id))
    }

    return (
        <li className="relative flex items-center gap-3 rounded-md bg-emerald-500 px-3 py-3 text-emerald-50 drop-shadow-md">
            <button
                className="absolute right-4 rounded-md bg-emerald-700 p-2 text-lg text-emerald-50 duration-200 hover:bg-emerald-800 min-[392px]:right-3 min-[392px]:top-3 sm:right-6 sm:top-5"
                onClick={() => handleDeleteItem(item.shoesId)}
            >
                <FaTrashAlt />
            </button>

            <img
                src={item.imageURL}
                alt={item.name}
                className="h-[120px] w-[120px] rounded-md sm:h-[150px] sm:w-[150px]"
            />
            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <span className="text-sm">
                        {item.gender === 'MEN' && "Men's Sneakers"}
                        {item.gender === 'WOMEN' && "Women's Sneakers"}
                        {item.gender === 'UNISEX' && 'Unisex Sneakers'}
                    </span>
                    <h3 className="text-lg font-semibold text-emerald-900">
                        {item.name}
                    </h3>
                    <span>Size: {item.size}</span>
                </div>
                <div className="mt-4 flex items-center justify-between sm:mr-5">
                    <div>
                        <button
                            className="h-6 w-6 rounded-md bg-emerald-700 duration-200 hover:bg-emerald-800 sm:h-8 sm:w-8"
                            onClick={() => handleDecreaseQuantity(item.shoesId)}
                        >
                            -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                            className="h-6 w-6 rounded-md bg-emerald-700 duration-200 hover:bg-emerald-800 sm:h-8 sm:w-8"
                            onClick={() => handleIncreaseQuantity(item.shoesId)}
                        >
                            +
                        </button>
                    </div>
                    <span className="text-xl font-semibold text-emerald-900">
                        ${item.totalPrice}
                    </span>
                </div>
            </div>
        </li>
    )
}

export default CartItem
