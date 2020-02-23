// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//Full disclosure, I had to look up how to do this and it took me a really long time... Math is NOT my strong suit at all, but I had known about the golden ratio for a long time thanks to the movie Pi.
//tl;dr andee brain stil kinda dum but les dum than bfor.. kinda. 

//Creation of the function that will take in an argument of how many times you want it to iterate through when you call it.
const goldenRatio = (number) => {
    //Declaring an array starting with the first two numbers, so that it doesnt print out 0 :D not sure if there is a better way, but more than likely is. 
    let resultArray = [1, 1];
    //Creation of a loop, with its index starting at 2 so it can start adding up from there. 
    for (let i = 2; i<number + 1; i++){
        //based on the number argument you input, the for loop will iterate through and push the added numbers up to the end of the array. 
        resultArray.push(resultArray[i - 2] + resultArray[i -1])
    }
    //Returning the results when its called back as an array! hoo(arr)ay! 
    return resultArray
}

//Calling the function in a console log, minus one number from the index position we want, since above we start off in the 2nd position. 
console.log(goldenRatio(9))
    

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


//Creation of the function which will take in the variables used above, do some calc magic and then return a new array 
const oddLeastToGreat = (array) => {
    //Delcaring a new array and immediately filtering it and sorting it. Side note: Found out you to run filter TWO FRICKIN TIMES ON ITSELF AND IT WORKS :O :O :O so cool... well... atleast I think its cool.  
    let newOddArray = array.filter(value => typeof value === "number").filter( value => value % 2).sort((a, b) => a-b)
    //Returning the double filtered and sorted array for when its called later.
    return newOddArray
}

//Calling the function with the above variables used as their arguments. 
console.log(oddLeastToGreat(fullArr1))
console.log(oddLeastToGreat(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


// Writing off this function that will try its best, it will try everything it can. It wont worry what arguements get passed to it when the console.log is away. 
const jimmyEatWorld = (string) => {
   let theRide = string.substr(string.length - 1 >>> 1, (~string.length & 1) + 1);
    return theRide
}

//Another full disclosure, I have been trying to play with substr since the last assessments and honestly its still kind of wizard space magic. Had to google this and I found the answer above, but its still super fuzzy to me. I'd love to have someone explain to me how substr works a little better.  Should have asked on the retro :(
//Calling the functions below. 
console.log(jimmyEatWorld(middleLetters1))
console.log(jimmyEatWorld(middleLetters2))



// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)


//Quick shoutout, once again, to Cruz for helping me understand this question a bit. He also wanted me to make everything a TACO but I refused. 

//Creating the class Sphere that will have its value set to 0. 
class Sphere{
    constructor(){
        this.sphere = 0;
    }
// Method to take in a sphere size argument and spit out the cool calculations. 
    makeSphere(nums){
        this.sphere = Math.floor(((nums**2)*4)*Math.PI);
        //This will log out the area when the function is called.
        console.log("Area of sphere is: ", this.sphere);
    }
}

//Creation of spheres x 3 
firstSphere = new Sphere();
firstSphere.makeSphere(10);

secondSphere = new Sphere();
secondSphere.makeSphere(50);

thirdSphere = new Sphere();
thirdSphere.makeSphere(100);



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


//Creation of function that will takes in an array and returns an array of the accumulating sum
const accumulate = (array) =>{
    //Declaring a temp variable to hold the index data and do the actual calc, but for now, it just sits around looking gorgeous. Just.. dont be rude and let it know its a 0 right now. 
    let temp = 0;
    //Declaring a temp array that holds nothing, but will eventually have above calculation pushed into it. Dont tell it that its just being used. Please. It cant handle it. Very sensitive.
    let tempArray = []
    //For loop to do the mafs. 
    for (let i = 0; i<array.length; i++){
        temp = array[i] + tempArray
        tempArray.push(temp)
    }
    //Returning the logic! Yay! temp and tempArray can feel useful! 
    return tempArray
}

//YO DJ, LOG DAT SHI.. STUFF 
console.log(accumulate(numbersToAdd1))
console.log(accumulate(numbersToAdd2))
console.log(accumulate(numbersToAdd3))
