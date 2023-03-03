import CartProductList from 'components/CartProductList/CartProductList'
import { ProductsInCart } from 'container/App/App'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid, Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'redux/hooks'

type Props = {
    removeProductFromCart: (id: number) => void
    incrementQuantityProductInCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartPage = ({
    removeProductFromCart,
    incrementQuantityProductInCart,
    changeProductQuantity,
}: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    incrementQuantityProductInCart={
                        incrementQuantityProductInCart
                    }
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
