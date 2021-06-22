
export interface Product {
    name: string;
    price: number;
}

export const products : Product[] = [
    {
        name: 'Steel Axe',
        price: 25
    },
    {
        name: 'Castle',
        price: 1000
    },
    {
        name: 'Golden Shield',
        price: 350
    }
];

export function calcAverageProductPrice(producArr: Product[]): number{

    let sum: number = 0;

    producArr.forEach((prod) => {
        sum += prod.price;

    })
    return (sum / producArr.length)

}

calcAverageProductPrice(products);

const avgProd: number = calcAverageProductPrice(products);

console.log(avgProd);



