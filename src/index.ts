import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import { Path, Product } from './types/types';
import { calculatePath } from './services/calculate.path.service';


dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', async (req: Request, res: Response) => {

    let productIds = ['product-1', 'product-2']

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
        x: 0,
        y: 0,
        z: 0,
    } 

    let order: Path = {
        pickingOrder: [],
        distance: 0
    }


    res.send({"Products": ['hi', 'me'], "distance": 0})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})