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
  'reference':'https://about.gitlab.com/topics/devops/'},

  {'id':11, 'term':'Microservices application', 
  'definition':'A microservices application is a cluster of small microservices that does a single job independently. These small microservices together build up a microservices application. This approach makes it easier to develop and update the application.', 
  'reference':'https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/01.htm#heading_id_8'},
  
  {'id':12, 'term':'Scrum', 
  'definition':'Scrum is a framework where a team can work on a product in a more collaborative way to ensure quality and timely delivery of products.', 
  'reference':'https://www.atlassian.com/agile/scrum'},
  
  {'id':13, 'term':'DIY DevOps', 
  'definition':'DIY DevOps (Do-It-Yourself DevOps) refers to the practice of setting up and managing DevOps processes and tools independently, without relying on dedicated DevOps teams or specialized services', 
  'reference':'https://www.synopsys.com/glossary/what-is-devops.html'},
  
  {'id':14, 'term':'DevOps Lifecycle', 
  'definition':'The DevOps lifecycle is a set of stages that takes through the planning, building, testing and monitoring of a software. The stages of the DevOps lifecycle are plan, create, Verify, Preprod, Release, Configure, Monitor.', 
  'reference':'https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/01.htm#heading_id_8'},
  
  {'id':15, 'term':'Kanban', 
  'definition':'Kanban is a framework similar to scrum, which is used to manage product delivery in an effective manner. It enhance team collaboration and efficiency in working collectively.', 
  'reference':'https://www.synopsys.com/glossary/what-is-devops.html'},
  
  {'id':16, 'term':'Infrastructure as Code', 
  'definition':'Infrastructure as Code (IaC) involves using code to manage and set up infrastructure, replacing the need for manual procedures. IaC increases consistency, speeds up deployment, and reduces manual errors in managing complex environments.', 
  'reference':'https://www.redhat.com/en/topics/automation/'},
  
  {'id':17, 'term':'Distributed Application', 
  'definition':'In distributed application each microservice works to accomplish a single feature. Different parts of the application run on separate computers, communicating to achieve a common goal.', 
  'reference':'https://aws.amazon.com/compare/the-difference-between-monolithic-and-microservices-architecture/'},
  
  {'id':18, 'term':'Monolithic Application', 
  'definition':'A monolithic application has all or most of its functionality within a single process or container. The entire application is built as a single, tightly integrated unit.',
  'reference':'https://learn.microsoft.com/en-us/dotnet/architecture/containerized-lifecycle/design-develop-containerized-apps/monolithic-applications'},
  
  {'id':19, 'term':'Kubernetes', 
  'definition':'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.', 
  'reference':'https://kubernetes.io/'},
  
  {'id':20, 'term':'Docker compose', 
  'definition':'Docker Compose lets you configure, build, run, and manage multiple containers at the same time.', 
  'reference':'https://docs.docker.com/get-started/08_using_compose/'},
  

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 DevOps Glossary', subtitle:'Welcome to my collection of DevOps Glossary', names: nameList});
});

module.exports = router;
