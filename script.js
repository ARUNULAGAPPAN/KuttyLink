function funA()
{
   var a=document.getElementById("num1").value;
   var a1=Number(a);
   var b= document.getElementById("num2").value;
   var b1= Number(b);

   var result= a1+b1;
   if (isNaN(result)) {
      result = "Please enter valid numbers.";
   } else {
      result = "Answer" + result;  
   }
   document.getElementById("ans").innerHTML=result;
}
function funS()
{
   var a=document.getElementById("num1").value;
   var a1=Number(a);
   var b= document.getElementById("num2").value;
   var b1= Number(b);

   var result= a1-b1;
   if (isNaN(result)) {
      result = "Please enter valid numbers.";
   } else {
      result = "Answer  " + result;  
   }
   document.getElementById("ans").innerHTML=result;
}
function funM()
{
   var a=document.getElementById("num1").value;
   var a1=Number(a);
   var b= document.getElementById("num2").value;
   var b1= Number(b);

   var result= a1*b1;
   if (isNaN(result)) {
      result = "Please enter valid numbers.";
   } else {
      result = "Answer  " + result;  
   }
   document.getElementById("ans").innerHTML=result;
}
function funD()
{
   var a=document.getElementById("num1").value;
   var a1=Number(a);
   var b= document.getElementById("num2").value;
   var b1= Number(b);

   var result= a1/b1;
   if (isNaN(result)) {
      result = "Please enter valid numbers.";
   } else {
      if( b1 === 0) {result="Division by zero is not allowed.";}
      else  result = "Answer  " + result;


   }
   document.getElementById("ans").innerHTML=result;
}
function funMD()
{
   var a=document.getElementById("num1").value;
   var a1=Number(a);
   var b= document.getElementById("num2").value;
   var b1= Number(b);

   var result= a1%b1;
   if (isNaN(result)) {
      result = "Please enter valid numbers.";
   } else {
      result = "Answer  " + result;  
   }
   document.getElementById("ans").innerHTML=result;
}
function funP()
{
   var a=document.getElementById("num1").value;
   var a1=Number(a);
   var b= document.getElementById("num2").value;
   var b1= Number(b);

   var result= Math.pow(a1,b1);
   if (isNaN(result)) {
      result = "Please enter valid numbers.";
   } else {
      result = "Answer  " + result;  
   }
   document.getElementById("ans").innerHTML=result;
}


