function Fun(clickedId) {
    document.calc.result.value+=clickedId;
}
function Clearfun() {
    document.calc.result.value="";
}
function compute() {
    try{
    var inp=eval(document.calc.result.value);
    document.calc.result.value=inp;
    }catch(err){
            document.calc.result.value="error";
    }
}
function squareroot(){
  var inputNum1=document.calc.result.value;
  var result = Math.sqrt(inputNum1);
  document.calc.result.value = result;
return result;
}
function absolute()
{
var inputNum1=document.calc.result.value;
var result = Math.abs(inputNum1);
document.calc.result.value = result;
return result;
}
function add()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)+(inputNum2);
document.calc.result.value = result;
return result;
}
function sub()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)-(inputNum2);
document.calc.result.value = result;
return result;
}
function div()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)/(inputNum2);
document.calc.result.value = result;
return result;
}
function percentile(){
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)%(inputNum2);
document.calc.result.value = result;
return result;
}
function mul(){
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)*(inputNum2);
document.calc.result.value = result;
return result;
}

function check()
{
	var text=document.getElementById("text1").value;
	var access=/^[7-9][0-9]{9}$/;
	if(access.test(text))
	{
		document.getElementById("lb1text").innerHTML="Vaild";
		document.getElementById("lb1text").style.visibility="visible";
		document.getElementById("lb1text").style.color="green";
	}
	else
	{
		document.getElementById("lb1text").innerHTML="InVaild";
		document.getElementById("lb1text").style.visibility="visible";
		document.getElementById("lb1text").style.color="red";
		alert("enter valid phone number");	
	}
}
function check2()
{
	var text=document.getElementById("text2").value;
	var access=/^([^0-9]{1})([a-zA-Z0-9\-])+$/;
	if(access.test(text))
	{
		document.getElementById("lb2text").innerHTML="Vaild";
		document.getElementById("lb2text").style.visibility="visible";
		document.getElementById("lb2text").style.color="green";
	}
	else
	{
		document.getElementById("lb2text").innerHTML="InVaild";
		document.getElementById("lb2text").style.visibility="visible";
		document.getElementById("lb2text").style.color="red";
		alert("Please enter a valid name");	
	}
}
function check3()
{
	var text=document.getElementById("text3").value;
	var access = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
	if(access.test(text))
	{
		document.getElementById("lb3text").innerHTML="Vaild";
		document.getElementById("lb3text").style.visibility="visible";
		document.getElementById("lb3text").style.color="green";
	}
	else
	{
		document.getElementById("lb3text").innerHTML="InVaild";
		document.getElementById("lb3text").style.visibility="visible";
		document.getElementById("lb3text").style.color="red";
		alert("Please enter a valid email id");	
	}
}

function Palindrome_check() 
{
	var pal=document.getElementById("text2").value;
	var ch = /[\W_]/g;
  var lowString = pal.toLowerCase().replace(ch, '');
  var reverseString = lowString.split('').reverse().join(''); 
  var result=(reverseString === lowString);
  return pal+" "+result;
}
function Anagram_check()
{
	var anag1=document.getElementById("text").value;
	var anag2=document.getElementById("text1").value;
	var anagr1 = anag1.toLowerCase().split('').sort().join('').trim();
	var anagr2 = anag2.toLowerCase().split('').sort().join('').trim();
	var result=(anagr1===anagr2);
	return anag1+" "+anag2+" "+result;
}

function round1(){
	  var a= Math.floor(Math.random() * (1000));
	  document.getElementById('g1').value=a;
	}
	function round2(){
	  var b= Math.floor(Math.random() * (1000));
	  document.getElementById('g2').value=b;
	}
	function main(){
	var a=document.getElementById('g1').value;
	var b=document.getElementById('g2').value;
		var c=a%3;
		var d=b%3;
		if(c==d){
			document.write("TIE");
		}
		else if(c==0 && d==1){
			document.write("Human Survives");
		}
		else if(c==0 && d==2){
			document.write("Human dies");
		}
		else if(c==1 && d==2){
			document.write("Cockroach Survives");
		}
	}
	
	

