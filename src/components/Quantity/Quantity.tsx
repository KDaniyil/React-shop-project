import { Button, TextField } from '@mui/material'

type Props = {
    onDecrement: () => void
    onIncrement: () => void
    count: number
}
function Quantity({ count, onDecrement, onIncrement }: Props) {
    return (
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
    )
}
export default Quantity
