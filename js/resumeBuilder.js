var bio = {
    "name": "Aleksandr Ljamin",
    "role": "web designer",
    "contacts": {
        "mobile": "0568932456",
        "email": "aleksandr.lmn@gmail.com",
        "twitter": "alljamin",
        "github": "alljamin",
        "location": "Adelaide",
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Now we're doomed!",
    "skills": ["awesomness", "no-sleep", "delivering things"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedPic, formattedMessage, HTMLskillsStart);
$("#skills").append(formattedSkills);

var education = {
    "schools": [
        {
            "name": "University of Tartu",
            "degree": "MSc Software Engineering",
            "dates": "2015-2016",
            "location": "Tartu, Estonia",
            "major": "Enterprise Systems"
        }, {
            "name": "Laurea University of Applied Sciences",
            "degree": "Bachelors of Business Administration",
            "dates": "2012-2015",
            "location": "Espoo, Finland",
            "major": "Busines Information Technology"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://classroom.udacity.com/courses/ud804",
        }, {
            "title": "Writing READMEs",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://classroom.udacity.com/courses/ud777",
        }
    ]
};

education["schools"] = HTMLschoolName.replace("%data%", "University of Tartu");
education["onlineCourses"] = HTMLschoolDegree.replace("%data%", "MSc Software Engineering");
education["dates"] = HTMLschoolDates.replace("%data%", "2015-2016");
education["location"] = HTMLschoolLocation.replace("%data%", "University of Tartu, Estonia");
education["major"] = HTMLschoolMajor.replace("%data%", "Enterprise systems");

$("#education").append(HTMLschoolStart);
$(".education-entry").prepend(education.school, education.degree, education.dates, education.location, education.major);


var work = {
    "jobs": [
        {
            "employer": "Upwork",
            "title": "Web designer",
            "location": "Worldwide",
            "dates": "2015 - today",
            "description": "Bulding web based solutions using HTML and CSS",
        }, {
            "employer": "University of Tartu",
            "title": "Assistant lecturer",
            "location": "Tartu, Estonia",
            "dates": "February 2016 - June 2016",
            "description": "",
        }, {
            "employer": "Laurea University of Applied Sciences",
            "title": "Editor-in-Chief of university internal digital media",
            "location": "Espoo, Finland",
            "dates": "May 2015 - December 2015",
            "description": "",
        }
        ]
};

// work.employer = HTMLworkEmployer.replace("%data%", "Upwork");
// work.position = HTMLworkTitle.replace("%data%", "Web designer");
// work.dates = HTMLworkDates.replace("%data%", "2015 - today");
// work.location = HTMLworkLocation.replace("%data%", "internet");
// work.description = HTMLworkDescription.replace("%data%", "Building web based solutions using HTML and CSS")

$("#workExperience").append(HTMLworkStart);
// $(".work-entry").prepend(work["employer"], work["position"], work["dates"], work["location"], work["description"]);
$(".work-entry").prepend(work.jobs);

var projects = {
    "projects": [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": ""
        }, {
            "title": "",
            "dates": "",
            "description": "",
            "images": ""
        }
    ]
};