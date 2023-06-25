import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import { Path, Product, StartingPositon } from './types/types';
import { calculatePath } from './services/calculate.path.service';


dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', async (req: Request, res: Response) => {

    let productIds = ['product-1', 'product-2'] // for testing purposes

    let productIdsReal = req.body.order
    let startingPosition: StartingPositon = req.body.startingPosition

    let products: Product[] = []

    for (let id of productIds){
        
        const result = await fetch(`https://dev.aux.boxpi.com/case-study/products/${id}/positions`, {
            headers: {
                'x-api-key': 'MVGBMS0VQI555bTery9qJ91BfUpi53N24SkKMf9Z',
                'Content-Type': 'application/json'
            }
        })
        
        const data: Product[] = await result.json()
        products.push(...data)
    }

    const start: Product = {
        positionId: "position0",
        productId: "product-0",
        quantity: 0,
        x: startingPosition.x,
        y: startingPosition.y,
        z: startingPosition.z,
    } 

    let order: Path = {
        pickingOrder: [],
        distance: 0
    }

    let orderPath = calculatePath(start, order, products)
    
    res.send(orderPath)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})