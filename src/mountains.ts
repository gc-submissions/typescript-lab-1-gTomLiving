export interface Mountain {
    name: string; 
    height: number;
}

export const mountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341

    },
    {
        name: 'Everest',
        height: 29029

    },
    {
        name: 'Denali',
        height: 20310
    }
];

    

export function findNameOfTallestMountain(mountArr: Mountain[] = []): string | number {
    

    let tallestMount : Mountain = {
        name: '',
        height: 0 
    };
    if(mountArr.length === 0){
        return 0;
    }

    mountArr.forEach((mountain) => {
        if(mountain.height > tallestMount.height) {
            tallestMount = mountain;
        }
    })
    return tallestMount.name;

}
// put in variable

const tallName: string| number = (findNameOfTallestMountain(mountains));

const tallTry: string |number = (findNameOfTallestMountain());

console.log(tallTry);

console.log(tallName);



