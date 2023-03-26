import { useAppSelector } from 'redux/hooks'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
type ProductsObject = {
    [id: number]: Product
}
const CartTotal = ({
    productsInCart,
}: Props) => {
    const productsArray = useAppSelector((state)=> state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)
    return (
        <div>
            {' '}
            Total:{' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}
            ${' '}
        </div>
    )
}
export default CartTotal
