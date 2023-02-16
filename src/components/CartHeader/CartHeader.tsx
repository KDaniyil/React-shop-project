import { ProductsInCart } from 'container/App/App'

type Props = {
    productsInCart: ProductsInCart
}
function CartHeader({ productsInCart }: Props) {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId} : {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
