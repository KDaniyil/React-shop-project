import { Button, TextField } from '@mui/material'

type Props = {
    onDecrement: () => void
    onIncrement: () => void
    count: number
    minCount?: number
}
function Quantity({ count, onDecrement, onIncrement, minCount = 1 }: Props) {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                disabled={count <= minCount}
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
    )
}
export default Quantity
