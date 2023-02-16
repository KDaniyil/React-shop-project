import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [sum, setSum] = useState<number>(0)
    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState) => prevState + 1)
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
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        disabled={count <= 1}
                        onClick={() => onDecrement()}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count}></TextField>
                    <Button
                        variant="outlined"
                        disabled={count >= 10}
                        onClick={() => onIncrement()}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(count, price)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
