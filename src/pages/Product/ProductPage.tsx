import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}
const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()
    const product: Product = productsObject[parseInt(id!)]
    return (
        <>
            <Typography variant="h2" component="h3">
                {product.title}
            </Typography>
            <div>
                <img src={product.image} alt={product.title} />
            </div>
            <div>Description:{product.description}</div>
            <div>Capacity:{product.capacity}</div>
            <div>Type:{product.type}</div>
            <div>Price:{product.price} $</div>
        </>
    )
}
export default ProductPage
