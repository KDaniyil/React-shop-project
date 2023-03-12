import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}
function CartProductListItem({ product, productCount }: Props) {
    return (
        <div>
            {product.title} : {productCount}
        </div>
    )
}
export default CartProductListItem
