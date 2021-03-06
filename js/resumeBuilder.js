var bio = {
    "name": "Aleksandr Ljamin",
    "role": "web designer",
    "contacts": {
        "mobile": "0568932456",
        "email": "aleksandr.lmn@gmail.com",
        "twitter": "alljamin",
        "github": "alljamin",
        "location": "Adelaide, South Australia",
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Now we're doomed!",
    "skills": ["HTML5", "CSS3", "workflow automation"]
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
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $('.work-entry:last').append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
	});
};

var projects = {
    "projects": [
        {
            "title": "Personal webpage redesign",
            "dates": "December 2016",
            "description": "Redesigning my personal page",
            "images": ["images/personal-page.jpg"]
        }, {
            "title": "Bicycle restoration project",
            "dates": "July 2013",
            "description": "Restored a road bicycle from the scrapyard",
            "images": ["images/bike.jpg"]
        }
    ]
};
projects.display = function() {
    for(i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        projects.projects[i].images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedImage);
        });
    }
};

var education = {
    "schools": [
        {
            "name": "University of Tartu",
            "degree": "Master Software Engineering",
            "dates": "2015-2016",
            "location": "Tartu, Estonia",
            "majors": ["Software Engineering"]
        }, {
            "name": "Laurea University of Applied Sciences",
            "degree": "Bachelor of Business Administration",
            "dates": "2012-2015",
            "location": "Espoo, Finland",
            "majors": ["Business Administration"]
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
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var o = 0; o < education.onlineCourses.length; o++) {
        $("#education").append(HTMLschoolStart);
        var formattedonTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[o].title);
        var formattedonSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[o].school);
        var formattedonDates = HTMLonlineDates.replace("%data%",education.onlineCourses[o].dates);
        var formattedonUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[o].url);
        $(".education-entry:last").append(formattedonTitle + formattedonSchool, formattedonDates, formattedonUrl);
    }
};
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);