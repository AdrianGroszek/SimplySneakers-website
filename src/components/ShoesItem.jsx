import { Link } from 'react-router-dom'

function ShoesItem({ product }) {
    return (
        <li className="group">
            <Link to={`/product/${product.id}`} className="flex flex-col">
                <div className="overflow-hidden">
                    <img
                        src={product.imageURL}
                        alt={product.name}
                        className={`h-[350px] w-[350px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105`}
                    />
                </div>
                <span className="text-stone-800">{product.name}</span>
                <span className="text-emerald-600">${product.price}</span>
            </Link>
        </li>
    )
}

export default ShoesItem
