function check()
{
    console.log("check");
    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;
    // input contains a lowercase letter
    if(input.match(/[a-z]/))
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red"; 
    }
    // input contains a uppercase letter
    if(input.match(/[A-Z]/))
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red"; 
    }
    // input contains a number
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red"; 
    }
    // input contains a special character (@, $, !, %, *, ?, &.)
    if(input.match(/[@$!%*?&]/i))
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red"; 
    }
    // At least 8 characters
    if(input.length<8)
    {
        document.getElementById("check4").style.color="red";
    }
    else
    {
       document.getElementById("check4").style.color="green"; 
    }
    
}