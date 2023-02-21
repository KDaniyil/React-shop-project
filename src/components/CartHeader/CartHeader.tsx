import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import { ProductsInCart } from 'container/App/App'

type Props = {
    productsInCart: ProductsInCart
}
function CartHeader({ productsInCart }: Props) {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
