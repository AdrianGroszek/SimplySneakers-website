import { useSelector } from 'react-redux'
import ShoesItem from './ShoesItem'
import { getProducts } from '../productsSlice'

function ShoesList() {
    const products = useSelector(getProducts)

    return (
        <ul className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
                <ShoesItem product={product} key={product.id} />
            ))}
        </ul>
    )
}

export default ShoesList
