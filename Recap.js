// 1. Variable Concept :
    var studentInfo = ' Freelancer ';

// 2.Condition Concept :
    var studentResult =  89 ;

    if (studentResult > 80 ) {
        console.log( ' You got A+');
    } 
    else if( studentResult < 70) {
        console.log( 'You got A');
    }
    else if ( studentResult == 60){
        console.log( ' you got B');
    }
    else if (studentResult != 50 ){
        console.log( ' you got c');
    }
    else if ( studentResult <= 40){
        console.log( ' yor ar pass');
    } 
    else {
        console.log( 'see you again');
    }

// 3.Array Overview :
    const teams = [ 21,45,67,32,2,23];
    const Count = teams.length;

    teams.push(100);
    teams.pop();

    teams[2] = 100 ;
    if ( teams.indexOf(100) != -1) {
        // console.log( 'find' );
    }

    // console.log( teams.includes(222));

// 4.looping:
    var jercy = [ 21,435,23,535,89];

    for (const eachPlayer of jercy) {
        console.log( eachPlayer);
    } 

// 5.Function Explore :
    function addNumber(x,y) {
        const total = x + y ;
        return total ;
    }
    var amountTotal = addNumber(76,89);
    console.log( amountTotal);

// Object :
    const studentInfo = {
        id : 121 ,
        names : ' Freelancer Nasim',
        country : ' Bangladesh'
    };   
