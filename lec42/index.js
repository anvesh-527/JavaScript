// Loops and strings

// Loops - Basic
// for,while,do-while

// do-while loop

// let i=1;
// do {
//     console.log("Anvesh");
//     i++;
// } while(i<=10);

// The first iteration is always guranteed irrespective of the condition.


// Advanced loops - In further lectures


// Strings -> Seq of characters

// The below is not possible
// let name = "Anvesh 
// komuravelli";

// To overcome this we use Template String
// let name2= `Anvesh
// Komuravelli`;

// Another method is 
// let name3 = new String("Anvesh");

// Operations on Strings 

// 1. + --> Concatenation
// let name1 = "Anvesh";
// let name2 = "K"
// let fullName = `${name1} ${name2}`;

// 2. length --> .length

// 3. upper/lower --> .upperCase() / .lowerCase()

// 4. substring --> 

// let name1 ="Anvesh"
// console.log(name1.substring(2)); --> Staring from 2(include)
// console.log(name1.substring(2,4)); --> Staring from 2(include) and end at 4(exclude)

// 5. split
// let name2 = "Anvesh anvi sai K";
// let words = name2.split(" "); --> Array of words
// let name2 = "Anvesh \\anvi \\sai \\K";
// let words = name2.split("\\");

// 6. Join --> Used to join --> Discussed Further in arrays 
// words.join(',')