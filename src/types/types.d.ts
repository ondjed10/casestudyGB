export type Product = {
    positionId: string,
    x: number,
    y: number,
    z: number,
    productId: string,
    quantity: number
}

export type Order = {
    products: Product[]
}

export type ProductPath = {
    productId: string,
    positionId: string
}

export type Path = {
    pickingOrder: ProductPath[],
    distance: number
}

export type StartingPositon = {
    x: number,
    y: number,
    z: number
}
