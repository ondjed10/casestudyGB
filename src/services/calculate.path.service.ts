import { Path, Product } from "../types/types";


export function calculatePath(start: Product, path: Path, products: Product[]){

    // if not on starting point filter products
    if (start.productId !== "start"){
        products = products.filter(product => product.productId !== start.productId)
    }

    // if products field is empty => return path
    if (products.length === 0){
        path.distance = Number(path.distance.toFixed(2))
        return path
    }

    let closest: Product = null
    let distance = Number.MAX_SAFE_INTEGER

    for (let product of products){
        let distanceToProduct = calculateDistance(start, product)

        if (distanceToProduct < distance){
            closest = product
            distance = distanceToProduct
        }

    }

    // add new point to path and increase distance
    path.pickingOrder.push({
        positionId: closest.positionId,
        productId: closest.productId
    })

    path.distance = path.distance + distance

    return calculatePath(closest, path, products)

}

function calculateDistance(pointA: Product, pointB: Product){

    let xDist = pointA.x - pointB.x
    let yDist = pointA.y - pointB.y
    let zDist = pointA.z - pointB.z

    let squaredX = Math.pow(xDist,2)
    let squaredY = Math.pow(yDist,2)
    let squaredZ = Math.pow(zDist,2)

    let rootDistance = Math.sqrt(squaredX + squaredY + squaredZ)

    return Math.abs(rootDistance)

}