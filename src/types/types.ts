export interface Product {
    positionId: string,
    x: number,
    y: number,
    z: number,
    productId: string,
    quantity: number
}

export interface Order {
    products: Product[]
}

