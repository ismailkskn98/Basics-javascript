//?         ÇARPIM TABLOSU 
//* iç içe döngüleri görmüş olacağız

/**
    1x1=1
    1x2=2
    1x3=3
    .
    .
    .
    .
    ..
 */

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            console.log(i + " x " + j + " = " + (i*j));
        }
        console.log("------------------");
    }

    /*
    
    1 x 1 = 1
    1 x 2 = 2
    .
    ..
    1 x 10 = 10
    2 x 1 = 2
    .
    .
    3 x 1 = 3
    */