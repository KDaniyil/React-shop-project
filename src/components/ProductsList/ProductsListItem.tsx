import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    id: number
    addProductToCart: (count: number, id: number) => void
}
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
    id,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [sum, setSum] = useState<number>(0)
    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt={title} />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity:{capacity} GB</div>
                <div className="product-price">$ {price}</div>
                <Quantity
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    count={count}
                />
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
