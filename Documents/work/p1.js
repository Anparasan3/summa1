const password             = "123a@b@c"
const conformpassword      = "123a@b@c"
var password_length        = password.length;
var conformpassword_length = conformpassword.length;

var lower        = /[a-z]/;
var upper        = /[A-Z]/;
var number       = /[0-9]/;
var special_char = /[~!@#$%^&*()-+_=]/;

var count1 = 0, count2 = 0, count3 = 0, count4 = 0;

if(password_length >= 8){
    if(password == conformpassword){
        for(i=0; i<password_length; i++){
            if (password[i] == password[i].match(lower)) 
                count1++;
            else if (password[i] == password[i].match(upper)) 
                count2++;
            else if (password[i] == password[i].match(number))
                count3++;
            else if (password[i] == password[i].match(special_char)) 
                count4++;
        }
    }
    else
        alert("your password is not matching ");
}
else{
    alert("your password must have a aleast 8 character : ")
    console.log("your password must have a aleast 8 character : ");
}



if(count1 > 0 && count2 > 0 && count3 > 0 && count4 > 0)
    console.log("true");
else{
    alert("password must have a 1lower char, 1upper char, 1numbers and 1special character")
    console.log("false");
}