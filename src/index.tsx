import React from 'react'
import ReactDOM from 'react-dom/client'

function Title() {
    return <h1>Hello React</h1>
}
function Content() {
    return (
        <React.Fragment>
            <p>My name is Daniyil</p>
            <p>I love React</p>
        </React.Fragment>
    )
}

//! Component
function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
