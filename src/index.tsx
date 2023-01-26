import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'

interface ITItleProps {
    text: string
}

const Title = (props: ITItleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

//! Component
function App() {
    return (
        <>
            <Title text="React" />
            <Title text="JS" />
            <Title text="TS" />
            <Content text1="I love React" text2="I love TS" year={2023} />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
