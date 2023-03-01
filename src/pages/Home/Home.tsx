import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (count: number, price: number) => void
}
function Home({ addProductToCart }: Props) {
    return (
        <div>
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </div>
    )
}
export default Home
