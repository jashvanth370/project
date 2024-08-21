function vfun(){
    var uname=document.forms["myform"]["uname"].value;
    var pwd=document.forms["myform"]["pwd"].value;

    if(uname==null || uname==""){
        document.getElementById("errorbox").innerHTML="Enter your username";
        return false;
    }

    if(pwd==null || pwd==""){
        document.getElementById("errorbox").innerHTML="Enter your pasword";
        return false;
    }

    if(uname!='' && pwd!=''){
        alert("Login Successfully");
    }
}

function vfun1(){
    var uname1=document.forms["myform1"]["uname1"].value;
    var email=document.forms["myform1"]["email"].value;
    var pwd1=document.forms["myform1"]["pwd1"].value;
    var pwd2=document.forms["myform1"]["pwd2"].value;

    if(uname1==null || uname1==""){
        document.getElementById("errorbox").innerHTML="Enter your username";
        return false;
    }

    if(pwd1==null || pwd1==""){
        document.getElementById("errorbox").innerHTML="Enter your pasword";
        return false;
    }
    if(pwd2==null || pwd2==""){
        document.getElementById("errorbox").innerHTML="re Enter your pasword";
        return false;
    }
    if(email==null || email==""){
        document.getElementById("errorbox").innerHTML="Enter your email";
        return false;
    }

    if(pwd1!=pwd2){
        document.getElementById("errorbox").innerHTML="Password dont match";
        return false;
    }

    if(uname1!='' && pwd1!='' && pwd2!='' && email!=''){
        alert("Register Succesfull");
    }
}