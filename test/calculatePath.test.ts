import testData from "./data/test1.json";
import { describe, expect, test } from "@jest/globals";
import { calculatePath } from "../src/services/calculate.path.service";
import { Product, Path } from "../src/types/types";


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

let products: Product[] = testData

describe('check algorithm', () => {
    test('check length of picking order', () => {
        expect(calculatePath(start,order,products).pickingOrder.length).toBe(5)
    })
})
