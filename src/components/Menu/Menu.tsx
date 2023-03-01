import MenuItem from './MenuItem'

type Props = {}
const Menu = ({}: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
