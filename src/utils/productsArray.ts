
type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}
const productsArray : Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 500,
        image: "/images/iphone-black.webp"
    },
    {
        id:2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 350,
        image: "/images/iphone-blue.webp"
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 325,
        image: "/images/iphone-gold.webp"
    },
    {
        id: 4,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '512',
        price: 500,
        image: "/images/iphone-green.webp"
    },
    {
        id:5,
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: "/images/iphone-purple.webp"
    },
    {
        id:6,
        title: 'iPhone 8 plus',
        description: 'This is iPhone 8 plus',
        type: 'phone',
        capacity: '64',
        price: 300,
        image: "/images/iphone-silver.webp"
    }
]

export default productsArray