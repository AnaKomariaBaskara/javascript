function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    var newPrices = [];
    for( i = 0; i < prices.length; i++){
       newPrices.push(prices[i] + increase);
    }
    console.log(newPrices)

}
