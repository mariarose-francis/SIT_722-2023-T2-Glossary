var express = require('express');
var router = express.Router();

const nameList = [
  {'id':1, 'term':'Agile', 
  'definition':'A methodology which takes factors such as iterative, incremental and lean into consideration while developing a software.', 
  'reference': 'https://about.gitlab.com/topics/agile-delivery/'},

  {'id':2, 'term':'Continuous Delivery(CD)', 
  'definition':'Continuous delivery is the process of building, testing and delivering an updated version of software by improving software code and user environments',
  'reference':'https://www.sumologic.com/glossary/continuous-delivery/'},

  {'id':3, 'term':'Continuous Integration(CI)', 
  'definition':'The procedure of continuously integrating changes in codes followed by an automated building and testing to avoid any errors.', 
  'reference':'https://about.gitlab.com/topics/devops/'},

  {'id':4, 'term':'DevOps', 
  'definition':'DevOps is a combination of development and operations team to provide users with the ultimate software products.', 
  'reference':'https://www.synopsys.com/glossary/what-is-devops.html'},

  {'id':5, 'term':'DevOps Engineer', 
  'definition':'DevOps Engineer combines the development and IT teams work together. They integrate the development process into workflow and introduce automation wherever possible. They also test and analyze code', 
  'reference':'https://about.gitlab.com/topics/devops/'},

  {'id':6, 'term':'DevSecOps', 
  'definition':'DevSecOps makes sure the security and integrity of the application is in place from the very  beginning. DevSecOps can be built on different environments like on-premise, cloud or hybrid to ensure the security of application. ', 
  'reference':'https://about.gitlab.com/blog/2021/06/01/gitlab-is-setting-standard-for-devsecops/'},

  {'id':7, 'term':'DevOps Platform', 
  'definition':'DevOps platform brings together the tools in a software development into a single platform which makes it easier for the engineers throughout the devops lifecycle. This way it makes it easier for the team to collaborate and innovate together as everyone can take part in the contribution.', 
  'reference':'https://about.gitlab.com/solutions/devops-platform/'}, 

  {'id':8, 'term':'Microservices', 
  'definition':'Microservices architecture is an approach in which the software development is divided into different modules. This means each team can work independently on their part of service to make the whole development process faster. Each service communicates through APIs. ', 
  'reference':'https://about.gitlab.com/topics/microservices/'}, 

  {'id':9, 'term':'Shift Left', 
  'definition':'Shift left means to implement security and testing at a very early stage of development process. Shifting of security and testing to an earlier stage to enhance the overall development process.', 
  'reference':'https://about.gitlab.com/topics/devops/'},

  {'id':10, 'term':'Version Control', 
  'definition':'Version Control is a mechanism of managing each change made to souce code.', 
  'reference':'https://about.gitlab.com/topics/devops/'}
  

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 DevOps Glossary', subtitle:'Welcome to my collection of DevOps Glossary', names: nameList});
});

module.exports = router;
