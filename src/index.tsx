import React from 'react'
import ReactDOM from 'react-dom/client'

//! Creation of React Elements
// const h1 = React.createElement('h1', { id: 'title' }, 'Hello React')
// const list = React.createElement(
//     'ul',
//     null,
//     React.createElement('li', null, 'list Item 1'),
//     React.createElement('li', null, 'list Item 2'),
//     React.createElement('li', null, 'list Item 3')
// )

//? Create Elements with JSX
const h1 = <h1 id="title">Hello React.js</h1>

let a = 10
let b = 'Hello test'

const list = (
    <ul>
        <li>List Item {a + 10 + 10}</li>
        <li>List Item {b}</li>
        <li>List Item 3</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
