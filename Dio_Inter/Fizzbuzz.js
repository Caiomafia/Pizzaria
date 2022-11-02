var n = 0;





const fizzbuzz = (n) => {



while(n<=15){
    if(n % 3 === 0 && n % 5 === 0){
        console.log( n +" FizzBuzz");
    }
    else if (n % 3 === 0 )
    { console.log( n +" Buzz");}

    else if (n % 5 === 0 ){
    console.log(n +" Fizz");
    }
    n++;
}


}