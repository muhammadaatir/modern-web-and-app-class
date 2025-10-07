// let test:number = 123;
// let str:string = "test";
// let boolean: boolean = true;
// let text:any = "test"
// let para: unknown =  "better version of any"

// const func: () => string = () => {
//     return "test"
// }

// func()

// function func2():number {
//     return 123
// }

// const arr:number[] = [1,2,3]
// const arr2:Array<number> = [1,2,3]

// const arr3: [string, number, boolean] = ["test", 12, true]

// interface objInterface {
//     name: string,
//     number?: number,
//     age?: number
// }

// let obj:objInterface  = {
//     name: "Aatir",
//     number: 1,
//     age: 1
// }

// obj = {
//     name: "test",
//     number: 6
// }

// console.log(obj.name)
// let str = "test"
// console.log(str)

// interface obj2Interface extends objInterface {
//     city: string
// }

// let obj2:obj2Interface  = {
//     name: "Aatir",
//     age: 1,
//     city: "karachi"
// }

// interface objType {
//     [key: string]: string
// }

// let obj: objType = {
//     name: "aatir"
// }

// obj = {
//     text: "aatir"
// }

// const func = (param: string, ...others:number[]):void => {
//     console.log(param)
// }
// func("1")

// const func<T> = (arr): T => {
//     return arr[0]
// }


// function func<A>(arr: A): A | undefined{
//     return arr[0]
// } 
// func("test")

// func("apple")


// function 
// enum VALUES {
//     first,
//     second
// }

// const {first, second} = VALUES
// function func1(param1: number, param2: number) {

//     console.log(param1, param2)
// }
// function func2(param1: number, param2: number) {
//     console.log(param1, param2)
// }

// func1(VALUES.first, VALUES.second);
// func2(VALUES.first, VALUES.second);