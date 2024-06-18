import { useSelector } from 'react-redux'
import { getCart, getTotalPrice } from '../cartSlice'
import CartItem from '../components/CartItem'
import toast from 'react-hot-toast'

function Summary() {
    const cart = useSelector(getCart)
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div className="mt-5 flex w-full flex-col items-center gap-3 md:w-[600px]">
            <h2 className="text-xl font-semibold">Summary</h2>
            <div className="flex h-[60px] w-full items-center justify-between rounded-md bg-emerald-500 px-6 py-3 text-lg text-emerald-50 drop-shadow-md">
                <span>Total: ${totalPrice}</span>
                {!cart.length || (
                    <button
                        className="rounded-md bg-emerald-700 px-5 py-1 text-emerald-50 duration-200 hover:bg-emerald-800"
                        onClick={() => toast('It is just a dummy pay button')}
                    >
                        PAY
                    </button>
                )}
            </div>
            <h2 className="text-xl font-semibold">Your Cart</h2>

            {!cart.length ? (
                <p>You don&apos;t have any items in your cart.</p>
            ) : (
                <ul className="flex w-full flex-col gap-3 pb-[50px]">
                    {cart.map((item) => (
                        <CartItem item={item} key={item.shoesId} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Summary
