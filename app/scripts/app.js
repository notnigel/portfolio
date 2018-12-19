var app = angular.module('myApp', []);

app.controller('commonController', function($scope) {
	$scope.title = "Nigel David - Portfolio";
	$scope.resumePath = "docs/Nigel_David_Resume_2018.pdf";

	//Helper functions
	$scope.exists = function (property){
		return typeof(property) != 'undefined' ? true : false;
	};
});

app.controller('aboutController', function($scope) {
	$scope.firstname = "Nigel";
	$scope.lastname = "David";
	$scope.location = "Austin, TX";
	$scope.email = "nigel.a.david@gmail.com";
	$scope.aboutText =  "Nigel David is a Web Developer in IBM’s Global Business Services organization. He is an adaptable, organized, and " +
						"detail oriented software engineer. His background comes from his degree in computer science and positions as a web " +
						"developer. He has recent experience as a scrum master, system engineer, and developer for AT&T telecommunication software.";
	$scope.linkedInLink = "https://www.linkedin.com/in/nigel-david-95630472";
	$scope.gitHubLink = "https://github.com/notnigel?tab=repositories";

	$scope.getEmailHref = function(email) {
		return "mailto:" + email;
	};
});

app.controller("experienceController", function($scope) {
	$scope.experienceCollection = [
				{
					dates: "April 2016 – Present",
					project: "Software Defined Networks – GUI Portal",
					position: "Software Developer",
					company: "IBM",
					client: "AT&T Account",
					description: "Created and enhanced components of AT&T’s SDN Web Portal. Coded the front end components using HTML, JS, and the DHTMLX (JS, AJAX, HTML) framework which presented the user with a functional GUI. Coded the back end components were Java and Spring which were used for data processing and REST API handling. The system ran MariaDb to maintain customer provisioning data. Ran Fortify Scan and fixed security vulnerabilities. Wrote backend unit tests using JUnit and Mockito.",
					toolsUsed: "Websphere, SVN, XMLSpy, MySQL Workbench, Eclipse, CA Agile, Rational Team Concert, Bitbucket, Git, JIRA, Tomcat, Maven"
				},
				{
					dates: "June 2014 – March 2016",
					position: "Scrum Master",
					company: "IBM",
					client: "AT&T Account",
					description: "Served as a leader for scrum teams to ensure Agile methodologies and principles are adhered to throughout iterations, prevent interference from outside the Scrum team, and provide assistance to the team when potential blockers are present. Organize and facilitate sprint planning, daily stand-up meetings, reviews, retrospectives, release planning, demos and other Scrum related meetings. Coordinate deliverables across iterations and releases and act as a liaison between the Product Owners and the team."
				},
				{
					dates: "October 2013 – June 2015",
					project: "Universal Service Request Platform",
					position: "System Engineer",
					company: "IBM",
					client: "AT&T Account",
					description: "Served as a leader for scrum teams to ensure Agile methodologies and principles are adhered to throughout iterations, prevent interference from outside the Scrum team, and provide assistance to the team when potential blockers are present. Organize and facilitate sprint planning, daily stand-up meetings, reviews, retrospectives, release planning, demos and other Scrum related meetings. Coordinate deliverables across iterations and releases and act as a liaison between the Product Owners and the team.",
					toolsUsed: "Word, Excel macros, VI, Eclipse, XML Spy, iRise, Sybase, ReqPro, RallyDev"
				}
	];

	//Helper functions
	$scope.getProjectAccountLine = function (project, account) {
		if(typeof(project) == 'undefined')
			return account;
		return project + ", " + account;
	};

	$scope.getToolsUsed = function (toolsUsed) {
		return "Tools Used: " + toolsUsed;
	};

});

app.controller("educationController", function($scope) {
	$scope.educationCollection = [
		{
			school: "Texas State University",
			dates: "August 2008 – May 2013",
			major: "Bachelor of Science in Computer Science",
			relevantCourses:"Software Engineering, Networks, Parallel Programming, Human Factors, Object Oriented Programming, Computer Architecture, and fundamental programming courses"
		}
	];

	//Helper functions
	$scope.getGpa = function(gpa) {
		return "GPA: " + gpa;
	};

	$scope.getRelavantCourses = function(relavantCourses) {
		return "Relevant Courses: " + relavantCourses;
	};
});

app.controller("skillsController", function($scope) {
	$scope.skillsCollection = [
		{
			skill: "Scrum Master Experience on Agile and Blended Agile projects"
		},
		{
			skill: "Skilled with design document creation and technical writing"
		},
		{
			skill: "Skilled with design document creation and technical writing"
		},
		{
			skill: "Practiced System Engineer providing maintenance services for software"
		},
		{
			skill: "Telecommunications Industry Experience with AT&T ordering and provisioning systems"
		},
		{
			skill: "Skilled with the MS Office Suite: Word, Excel, Visio, PowerPoint"
		},
		{
			skill: "Experienced with building web applications with the LAMP stack"
		},
		{
			skill: "Intermediate skill with C, C++, Java, JS"
		},
		{
			skill: "Basic skill with CUDA, AngularJS, PHP"
		},
		{
			skill: "Basic knowledge of architecture exploitations, parallel approaches and optimizations"
		},
		{
			skill: "Knowledge of database constructs, schema design, and SQL"
		},
		{
			skill: "Effective communication in a business and technical environment"
		}
	]
});

app.controller('interestsController', function($scope) {
	$scope.interestsLine = "When I'm not working, I like to further myself through learning. I am an avid mountain biker and traveller.";
})
