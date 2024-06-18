function QuantityButton({ decreaseOnClick, increaseOnClick, quantity }) {
    return (
        <div>
            <button
                className="h-8 w-8 rounded-md bg-stone-300"
                onClick={() => decreaseOnClick()}
            >
                -
            </button>
            <span className="px-3">{quantity}</span>
            <button
                className="h-8 w-8 rounded-md bg-stone-300"
                onClick={() => increaseOnClick()}
            >
                +
            </button>
        </div>
    )
}

export default QuantityButton
