import CartTotal from 'components/CartTotal/CartTotal'
import { ProductsInCart } from 'container/App/App'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
type Props = {
    productsInCart: ProductsInCart
    productsObject?: {
        [id: number]: Product
    }
}
function CartHeader({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} :{' '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
