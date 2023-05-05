export const name = '张三'
export const age = 18
export function sayName() {
    console.log(`我是${name}`);
}

//也可以这样
/*const name = '张三';
const age = 18;
const sayName = function() {
    console.log(fristName);
}
export {name, age, sayName}*/


//export default命令是用于在一个模块文件中指定默认的导出内容。在一个模块文件中，可以同时使用export和export default来导出变量、函数、类等内容。但是，每个模块文件只能有一个默认的导出内容。
const myVariable = 'Hello World'
function myFunction() {
    console.log('This is my function');
}
export { myVariable, myFunction }
export default myFunction; //指定默认抛出的是myFunction


//也可以用来输出类。
export class Person {
    constructor(sex) {
        this.sex = sex
    }
}