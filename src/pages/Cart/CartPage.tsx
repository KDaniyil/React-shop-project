import CartProductList from 'components/CartProductList/CartProductList'
import { ProductsInCart } from 'container/App/App'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid, Typography } from '@mui/material'

type Props = {
    productsInCart: ProductsInCart
}
const CartPage = ({ productsInCart }: Props) => {
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
                />
            </Grid>
        </div>
    )
}
export default CartPage
