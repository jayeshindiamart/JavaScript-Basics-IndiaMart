function Product(name, cost) {
    this.name = name
    this.cost = cost
    this.getDetails = function() {
        return this.name + ' : ' + this.cost
    }
}

var product = new Product("Alexa", '$200.45')


// product.name = "Alexa"
// product.cost = '$200.45'
// product.getDetails = function(){
//     return product.name + ' : '+ product.cost
// }

console.log(product)
console.log(product.getDetails())