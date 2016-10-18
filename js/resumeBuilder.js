// $("#header").append()



// var email = "name@yahoo.com";
// var newEmail = 
//     email.replace("yahoo", "gmail");
// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "My name is Alex and I am AWESOME!";

// var funThoughts = 
//     awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Aleksandr Ljamin");
var formattedRole = HTMLheaderRole.replace("%data%","web designer");
$("#header").prepend(formattedName, formattedRole);

var bio = {
    "contact": {
        "email": "aleksandr.lmn@gmail.com",
        "twitter": "alljamin",
        "github": "alljamin",
        "location": "Adelaide",
    },
    "biopic": "images/fry.jpg",
    "welcomeMsg": "Now we're doomed!",
    "skills": ["awesomness", "no-sleep"]
};

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#header").append(formattedPic);
$("#header").append(formattedMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

// bio.work = {
//     "position": "Web dev",
//     "employer": "Upwork",
//     "years": "1 year",
//     "city": "Adelaide"
// };
// bio["education"] = {
//     "university": "University of Tartu",
//     "years": "1 year"
// };
// $("#main").append(bio.work);
// $("#main").append(bio.education);