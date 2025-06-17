//1. Write a simple 'if' statement that checks if a number is positive.
// let number = 0; // Example number
// let res="";
// if(number>0){
//     res+="positive number";
// }else if(number<0){
//     res+="negative number";
// }else{
//     res+="number is zero";
// }
// console.log(res);

//2. How do you use 'if-else' to check if a number is even or odd?
// let number=10;
// let res="";
// if(number%2==0){
//     res+="even number"
// }else{
//     res+="odd number"
// }
// console.log(res);

//3. Write a conditional statement to check if a variable is undefined.
// var a=10;
// if(a==undefined){
//     console.log("variable is undefined");
// }else{
//     console.log("variable is defined");
// }

//4. Ticket Pricing
// let age =100;
// let price="";
// if(age<=12){
//     price+="$5"
// }else if(age<=64){
//     price+="$15"
// }else{
//     price+="$7"
// }
// console.log(price);

//5. Password Length
// let password="6665436sdw";
// let strenght="";
// if(password.length<8){
//     strenght+="weak";
// } else{
//     strenght+="strong"
// }
// console.log(strenght);

//6. Palindrome Detector
// let word="Nitin";
// let Palindrome=[...word].reverse().join("");
// let res="";
// if(word.toLocaleLowerCase()===Palindrome.toLocaleLowerCase()){
//     res+="true"
// }else{
//     res+="false";
// }
// console.log(res);


//7. Shipping Cost Calculator
// let price=51;
// if(price<=50){
//     price+=0;
// }else{
//     price+=5
// }
// console.log("total cost",price);

//8. Rock, Paper, Scissors

// let player1="paper";
// let player2="scissor";

// if(player1==="rock"&&player2==="paper"){
//     console.log("win player2");
// }else if(player1==="rock"&&player2==="scissor"){
//     console.log("win player1");
// }else if(player1==="paper"&& player2==="scissor"){
//     console.log("win player2");
// }else if(player1===player2){
//     console.log("match tie");
// }

//9. ATM Logic
// var balance=10000;
// let cashOut=100;
// if(balance<0||cashOut%10!=0){
//     console.log("Insufficient funds or Invalid amount");
// }else{
//     balance-=cashOut;
//     console.log("withdrawal is successful");
//     console.log("current balance",balance);

// }

// 10. Case Checker

// let str="@1amit";
// if(str.charCodeAt(0)>=97 && str.charCodeAt(0)<=122 ){
//     console.log("lower case");
// }else if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90){
//     console.log("uppercase");
// }else if(str.charCodeAt(0)>=48 && str.charCodeAt(0)<=57){
// console.log("number");
// }else{
// console.log("special character");
// }
// console.log("9".charCodeAt(0));

//11. tempature alert
// let temp=30;

// if(temp<10){
//     console.log("Freezing Alert!");
// }else if(temp>35){
//     console.log("Heatwave Alert!");
// }else{
//     console.log("normal");
// }

// 12. Library Fine Calculator
// let day=31
// let fine=0
// if(day<=30){
//     fine=0.25*day;
// }else{
//     fine=10;
// }

// console.log(fine);

//13. Email Validator
// let email="dnsd@gmail.com";
// if(email.includes("@")){
//      let str=email.slice(email.indexOf("@")+1,email.length).includes(".");
//      if(str){
//         console.log("valide email");
//      }else{
//         console.log("invalide email");
//      }
// }else{
//     console.log("invlide email");
// }

//14. Tieningme of Day
// let time=12
// if(time>=5 && time<=11){
//     console.log("morning");
// }else if(time>=12 && time<=17){
// console.log("afternoon");    
// }else if(time>=18 && time<=21){
// console.log("evening");
// }else{
//     console.log("night");
// }

//15. password strength
// let pass="qeuiew1wdjA";
// let num=/[0-9]/.test(pass);
// let alpha=/[A-Z]/.test(pass);
// let len=pass.length>=8;

// if(num&& alpha&&len){
//     console.log("strong");
// }else{
//     console.log("false");
// }

// 16. Text Message Truncator

// let string="jjfhdisfuhviu sihsihiud hiu dui uihsfhih ljijjivjiviu uif fui hfd huid pdpihiup hi iiuiuhuihiuhisjofijoi  uyh uh ui hurhieruhvhvuvubvbvhbfhvhbjoef oogij oejgo joi joogjo jgoieog  oioigj jri jn vin in irjoijr iulnr nrlinrilvbrw i b  iurbeiu br ri in ih uih r iiui  ro r i  "
// if(string.length<=157){
//     console.log(string);
// }else{
//     string=string.slice(0,157)+"..."
//     console.log(string);
// }

//17. Fuel Alert
// let fuel=29;
// if(fuel<=10){
//     console.log("Low Fuel or Empty");
// }else if(fuel>10 && fuel<50){
//     console.log("good");
// }else{
//     console.log("full");
// }

// 18. loan
// let salary=30000
// let score=700
// if(salary>=30000 &&  score>=700){
//     console.log("loan approve");
// }else{
//     console.log("no loan");
// }

// 19.leap year
// let year=2024;
// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     console.log("leap year");
// }else{
//     console.log("not leap year");
// }

// 20. tringle type
// let side1=10;
// let side2=20;
// let side3=30;

// if(side1==side2 && side2==side3){
//     console.log("Equilateral triangle");
// }else if(side1==side2 || side2==side3 || side1==side3){
//     console.log("Isosceles triangle");
// }else{
//     console.log("Scalene triangle");
// }