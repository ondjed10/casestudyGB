import random
import json

def generateProducts(numOfProducts, numOfEntries, dimensionOfWarehouse, filename):

    products = []

    i = 0
    while i < numOfEntries:
        newProduct = {
            "productId": "product-"+str(random.randint(1,numOfProducts)),
            "positionId": "position"+str(i+1),
            "quantity": 1,
            "x": random.randint(0,dimensionOfWarehouse),
            "y": random.randint(0,dimensionOfWarehouse),
            "z": random.randint(0,dimensionOfWarehouse)
        }
        products.append(newProduct)
        i += 1

    data = json.dumps(products, indent=4)

    with open(filename, "w") as outfile:
        outfile.write(data)

# generate more test data by changing parameters of function
generateProducts(50,1000,120,"./test/data/test3.json")

