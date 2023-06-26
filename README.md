# casestudyGB
Case study for a job interview

Simple HTTP server with one GET method (/).

## Input parameters
in request body input these parameters
- starting position: object with x,y,z attributes determening starting location. Example: "startingPostition": {"x": 1, "y":1, "z":5}.
- order: array of strings structured as product-{number}. Example: "order":["product-1", "product-5"]

## Expected output
Output sent in response is object with two properties:
- pickingOrder: array of ordered products, represents path which should be taken in order to pick up order as fast as possible.
- distance: how much units cart needs to travel to pick up the order

### Setup and run
- clone this repository
- npm install
- npm run build
- npm run dev
- go to localhost:3000
- done 👍
