import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart } from '../cartSlice'

function Header() {
    const cart = useSelector(getCart)
    return (
        <header className="fixed z-50 w-full bg-emerald-500 drop-shadow-md">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between p-3">
                <Link to={'/'} className="flex items-center">
                    <img
                        src="https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-svg-vector.svg"
                        className="h-8"
                    />
                    Simply<span className="text-emerald-900">Sneakers</span>
                </Link>
                {/* {!cart.length ? (
                    <span className="hidden md:block">
                        No items in cart yet
                    </span>
                ) : (
                    <span className="hidden md:block">
                        You have {cart.length} {''}
                        {cart.length === 1 ? 'item' : 'items'} in cart
                    </span>
                )} */}
                <Link
                    to="/summary"
                    className="relative rounded-md bg-emerald-700 px-5 py-1 text-emerald-50 duration-200 hover:bg-emerald-800"
                >
                    <span className="absolute right-[-8px] top-[-8px] h-6 w-6 rounded-full bg-red-500 text-center">
                        {cart.length}
                    </span>
                    CART
                </Link>
            </div>
        </header>
    )
}

export default Header
