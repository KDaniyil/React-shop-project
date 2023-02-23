import { ProductsInCart } from 'container/App/App'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: ProductsInCart
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    incrementQuantityProductInCart?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    incrementQuantityProductInCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    incrementQuantityProductInCart={
                        incrementQuantityProductInCart
                    }
                    changeProductQuantity={changeProductQuantity}
                />
            ))}
        </>
    )
}
export default CartProductList
