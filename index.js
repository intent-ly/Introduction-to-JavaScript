/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge =21;

if(votingAge>18){
    console.log("TRUE")
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var intA = 1;
var intB = 2;

if(intB===2)
{
    intA=3;
    console.log(intA)
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

 Number("1999")

//Task d: Write a function to multiply a*b 

function multiplicationFunction(a,b){
    return a*b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a){
    return a * 7;
}

console.log(dogYears(20));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(age, weight){
    if(age >= 1){
        if(weight <=5)
        {
            return .05 * weight;
        }
        else if(weight>5 && weight<=10){
            return .04 * weight;
        }
        else if(weight>10 && weight<=15){
            return .03 * weight;
        }
        else if(weight>15){
            return .02 * weight;
        }
    }
    else if(age < 1){
        if(age>=.1667 && age<.3333){
            return .1 * weight;
        }
        else if(age>=.3333 && age<.5833){
            return .05 * weight;
        }
        else if(age>=.5833 && age<1 ){
            return .04 * weight;
        }
    }
}

console.log(dogFeeder(1,15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const getUserChoice = userInput => {
    if(userInput === 'rock'||  userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else{
        console.log('Error!')
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return('rock');
    }else if(randomNumber === 1){
        return('paper');
    }else{
        return('scissors')
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'The game is a tie!'
    };
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'The computer won!'
        } else{
            return 'You won!'
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            return 'You won!'
        } else{
            return 'The computer won!'
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
            return 'The computer won!'
        } else{
            return 'You won!'
        }
    }
};

const playGame =() => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame()

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmMiles(kmLength){
    return kmLength * 0.62137
}


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetCM(feetLength){
    return feetLength/0.032808;
}



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(){
    i=99;
    while(i>1){
        console.log(i); console.log("bottles of soda on the wall, ");
        console.log(i); console.log(" bottles of soda, take one down, pass it around ");
        console.log(i-1); console.log("bottles of soda on the wall.");
        i=i-1;
    }
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade(grade){
    if(grade>= 90){
        console.log("A");
    }
    else if(grade <90 && grade>=80){
        console.log("B");
    }
    else if(grade<80 && grade>=70){
        console.log("C");
    }
    else if(grade<70 && grade>=60){
        console.log("D");
    }
    else if(grade<60){
        console.log("F");
    }
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





