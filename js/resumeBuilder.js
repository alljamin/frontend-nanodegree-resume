$("#header").append()



var email = "name@yahoo.com";
var newEmail = 
    email.replace("yahoo", "gmail");
console.log(email);
console.log(newEmail);

// var awesomeThoughts = "My name is Alex and I am AWESOME!";

// var funThoughts = 
//     awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Aleksandr Ljamin");
var formattedRole = HTMLheaderRole.replace("%data%","web designer");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
