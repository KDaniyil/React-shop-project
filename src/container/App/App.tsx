import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Button, Container } from '@mui/material'
import CartPage from 'pages/CartPage/CartPage'
import { omit } from 'lodash'

type Props = {}

export type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })
    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }

    const incrementQuantityProductInCart = (id: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: prevState[id] + 1,
        }))
    }
    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({ ...prevState, [id]: count }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                removeProductFromCart={removeProductFromCart}
                                incrementQuantityProductInCart={
                                    incrementQuantityProductInCart
                                }
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
