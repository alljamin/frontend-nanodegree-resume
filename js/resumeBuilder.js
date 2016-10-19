var bio = {
    "name": "Aleksandr Ljamin",
    "role": "web designer",
    "contact": {
        "email": "aleksandr.lmn@gmail.com",
        "twitter": "alljamin",
        "github": "alljamin",
        "location": "Adelaide",
    },
    "biopic": "images/fry.jpg",
    "welcomeMsg": "Now we're doomed!",
    "skills": ["awesomness", "no-sleep", "delivering things"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#topContacts").append(formattedEmail, formattedTwitter, formattedGithub);
$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedPic, formattedMsg, HTMLskillsStart);
$("#skills").append(formattedSkills);

var work = {};
work.employer = HTMLworkEmployer.replace("%data%", "Upwork");
work.position = HTMLworkTitle.replace("%data%", "Web designer");
work.dates = HTMLworkDates.replace("%data%", "2015 - today");
work.location = HTMLworkLocation.replace("%data%", "internet");
work.description = HTMLworkDescription.replace("%data%", "Building web based soluting using HTML and CSS")

$("#workExperience").append(HTMLworkStart);
$(".work-entry").prepend(work["employer"], work["position"], work["dates"], work["location"], work["description"]);

var education = {};
education["school"] = HTMLschoolName.replace("%data%", "University of Tartu");
education["degree"] = HTMLschoolDegree.replace("%data%", "MSc Software Engineering");
education["dates"] = HTMLschoolDates.replace("%data%", "2015-2016");
education["location"] = HTMLschoolLocation.replace("%data%", "University of Tartu, Estonia");
education["major"] = HTMLschoolMajor.replace("%data%", "Enterprise systems");

$("#education").append(HTMLschoolStart);
$(".education-entry").prepend(education.school, education.degree, education.dates, education.location, education.major);