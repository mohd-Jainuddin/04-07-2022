function Addition(callback){
    console.log('I am call back');
    let n=callback();
    console.log(`Sum is = ${n}`)
}

function Sum(){
    let a=5,b=10
    return a+b
}

Addition(Sum);