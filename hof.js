const ayaz = function(x){
    return function(y){
        return function(z){
        console.log(x+y+z)
        }
    }
}
ayaz("aryan")(24)(455);
// const rohit = ayaz("Aryan")
// rohit(28)