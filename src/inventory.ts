import { Product } from './products';

export interface InventoryItem {

    product: Product,
    quantity: number
}


export const inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

export function calcInventoryValue(inventoryArr: InventoryItem[]): number {
    let totalValue: number = 0;


    inventoryArr.forEach((item) => {
        totalValue += (item.product.price * item.quantity);
    })

    return totalValue;
}

const inventoryValue: number = calcInventoryValue(inventory);

console.log(inventoryValue);


