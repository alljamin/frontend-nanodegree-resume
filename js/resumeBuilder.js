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
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedrole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedlocation);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};
bio.display();

var work = {
    "jobs": [{
            "employer": "Upwork",
            "title": "Web designer",
            "location": "Remote",
            "dates": "2015 - present",
            "description": "Bulding web based solutions using HTML5 and CSS3",
        }, {
            "employer": "University of Tartu",
            "title": "Assistant lecturer",
            "location": "Tartu, Estonia",
            "dates": "February 2016 - June 2016",
            "description": "Assisted in organising designing the user inteface course",
        }, {
            "employer": "Laurea University of Applied Sciences",
            "title": "Editor-in-Chief of university internal digital media",
            "location": "Espoo, Finland",
            "dates": "May 2015 - December 2015",
            "description": "Responsible for the development and production of univeristy intrnal media source",
        }]
};
work.display = function() {
	work.jobs.forEach(function(job) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$('.work-entry:last').append(formattedDescription);
	});
};
work.display();

var projects = {
    "projects": [
        {
            "title": "Project one",
            "dates": "3000",
            "description": "Redesigning my personal page",
            // "images": ""
        }, {
            "title": "Project two",
            "dates": "2000",
            "description": "desc",
            // "images": ""
        }
    ]
};
projects.display = function() {
    for(i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);
        // var formattedImage = HTMLprojectImage.replace("%data%", img);
        // $(".project-entry:last").append(formattedImage);
    }
};
projects.display();

var education = {
    "schools": [
        {
            "name": "University of Tartu",
            "degree": "Master Software Engineering",
            "dates": "2015-2016",
            "location": "Tartu, Estonia",
            "major": "Enterprise Systems"
        }, {
            "name": "Laurea University of Applied Sciences",
            "degree": "Bachelor of Business Administration",
            "dates": "2012-2015",
            "location": "Espoo, Finland",
            "major": "Business Information Technology"
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
education.display = function() {
    for(i = 0; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var o = 0; o < education.onlineCourses.length; o++) {
        $("#education").append(HTMLschoolStart);
        var formattedonTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[o].title);
        var formattedonSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[o].school);
        $(".education-entry:last").append(formattedonTitle + formattedonSchool);
        var formattedonDates = HTMLonlineDates.replace("%data%",education.onlineCourses[o].dates);
        $(".education-entry:last").append(formattedonDates);
        var formattedonUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[o].url);
        $(".education-entry:last").append(formattedonUrl);
    }
};
education.display();

$("#mapDiv").append(googleMap);