// 1 - ts is dynmaic static languges which has own compiler
// 2 - ts could catching error on compiler time 
// 3- to create tsconfig.json => tsc --init
// 4- watch result by => tsc name-of-file --watch


// TypsScript types
    // boolean
let isCool:boolean = true;

    // number
let age:number = 56;

    //string
let eyeColor:string = 'brown';
let favouriteQuote: string = `I'm not old`;

    //array
let pets: string[] = ['cat', 'dog', 'cow']
let pets2: Array<string> = ['cat', 'dog', 'cow']

    //object
let wizard: object = {
    a: 'john'
}
    //null & undfiend
let meh: undefined = undefined;
let noo: null = null;

    //tuple
let basket: [string, number];
basket = ['basketball', 5]

    //enum
enum size  {small = 1 , mediun = 3, large = 3}
let sizeName:string = size[2]

    //any => be carfull when use it 
let whatever: any = "nooooooooooooooooo!!!!"

    //void => use with function when fuc return nothing
let sing = (): void => {
    console.log('lalalala');
}
    //never
    // Function returning never must not have a reachable end point

let error = () => {
    throw Error('oops')
}

    //INTERFACE
interface robotArmy {
    count: number,
    type: string
    magic?: string // may or may not part of object
}

let fightrobotsArmy = (robots: robotArmy) => {
    console.log('Fight!');
}

fightrobotsArmy({count: 1, type: 'defender', magic: 'water spilting from roof'})
    // type Assertion be carrfull when use it 
interface robotArmy2 {
    count: number,
    type: string
    magic: string
}

let dog = {} as robotArmy2
dog.type

    //function
let fightrobotsArmy3 = (robots: robotArmy):void => {
    console.log('Fight!');
}

let fightrobotsArmy4 = (robots: robotArmy): number => {
    return 5
}

    //class 

class Animal {
    private sing:string = 'lalalala' // this is should be private variable
    constructor(sound:string) {
        this.sing = sound
    }
    greet() {
        return 'hello'
    }
}

let lion = new Animal('Raaawwer')
lion.greet()

// union
let confused: string | number = "hello "
