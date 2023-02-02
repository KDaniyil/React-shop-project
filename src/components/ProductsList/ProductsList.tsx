import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Products List
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title={'iPhone 14 pro'}
                        description={'lorem sabfoa'}
                        type={'phone'}
                        capacity={'256'}
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title={'iPhone 13 pro'}
                        description={'lorem sabfoa'}
                        type={'phone'}
                        capacity={'128'}
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title={'iPhone 12 pro'}
                        description={'lorem sabfoa'}
                        type={'phone'}
                        capacity={'64'}
                        price={900}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
