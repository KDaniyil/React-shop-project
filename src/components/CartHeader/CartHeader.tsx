import { CartDataProps } from 'container/App/App'

type Props = {
    cartData: CartDataProps
}
function CartHeader({ cartData }: Props) {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>${cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
