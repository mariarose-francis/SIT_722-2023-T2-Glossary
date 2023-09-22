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
  
  {'id':21, 'term':'RabbitMQ', 
  'definition':'RabbitMQ is like a messenger for computer programs.It is an open-source message broker that facilitates reliable communication between different parts of a distributed system using message queues and exchanges.', 
  'reference':'https://en.wikipedia.org/wiki/RabbitMQ'},

  {'id':22, 'term':'MongoDB', 
  'definition':'MongoDB is an open-source NoSQL database system notable for its flexibility, scalability, and speed in handling diverse data types, commonly used in web applications.', 
  'reference':'https://en.wikipedia.org/wiki/MongoDB'},

  {'id':23, 'term':'Advanced Message Queuing Protocol', 
  'definition':'Advanced Message Queuing Protocol (AMQP) is created as an open standard protocol that allows messaging interoperability between systems, regardless of message broker vendor or platform used', 
  'reference':'https://www.cloudamqp.com/blog/what-is-amqp-and-why-is-it-used-in-rabbitmq.html'},

  {'id':24, 'term':'NetApp', 
  'definition':'NetApp is a company that provides data storage and management solutions for businesses. They help organizations store, organize, and access their data securely and efficiently, making it easier to manage and use digital information.', 
  'reference':'https://www.netapp.com/'},

  {'id':25, 'term':'Containers', 
  'definition':'Containers are a method of building, packaging and deploying software. It includes the program itself, its dependencies, and settings, making it easy to run the same program on different computers without any problems', 
  'reference':'https://www.vmware.com/au/topics/glossary/content/container-deployment.html'},

  {'id':26, 'term':'Docker Image', 
  'definition':'A Docker image is a file used to run code within a Docker container. It serves as a blueprint for creating containers and serves as the initial setup for Docker operations.', 
  'reference':'https://www.docker.com/'},

  {'id':27, 'term':'Yaml file', 
  'definition':'A YAML (YML) file is a configuration file used in Docker Compose. It enables the simultaneous deployment, combination, and configuration of multiple Docker containers. This simplifies the management of complex containerized applications by defining their setup and relationships in a structured and easy-to-read format.', 
  'reference':'https://docs.docker.com/compose/'},

  {'id':28, 'term':'JSON', 
  'definition':'JSON (JavaScript Object Notation) is a way to write down data in a simple text format that both humans and computers can understand easily. It is used to package information like lists, numbers, and objects, making it simple to exchange data between servers and web applications over the internet.', 
  'reference':'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON'},

  {'id':29, 'term':'Azure Storage', 
  'definition':'Azure file storage is a cloud service that can replace or enhance traditional file servers and storage devices. It allows various operating systems like Windows, macOS, and Linux to easily access files stored in Azure from anywhere globally. This makes it flexible and convenient for businesses to manage and share their files.', 
  'reference':'https://azure.microsoft.com/en-us/services/storage/'},

  {'id':30, 'term':'Node.js', 
  'definition':'Node.js is a technology for creating speedy and adaptable network applications. It is based on Chromes JavaScript system and uses an efficient approach for handling data, making it great for real-time applications on multiple devices.', 
  'reference':'https://www.tutorialspoint.com/nodejs/index.htm'},

  {'id':31, 'term':'Minikube', 
  'definition':'Minikube is a user-friendly, lightweight tool for learning and developing applications on Kubernetes by setting up a single-node cluster on your local machine. It simplifies Kubernetes experimentation and development with a minimalistic, local environment.', 
  'reference':'https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/'},

  {'id':32, 'term':'Npm', 
  'definition':'npm, short for Node Package Manager, is a widely used package manager for JavaScript programming. It allows developers to easily install, manage, and share libraries and packages of code to enhance their projects, making it a fundamental tool in the Node.js ecosystem.', 
  'reference':'https://en.wikipedia.org/wiki/Npm'},

  {'id':33, 'term':'Localhost', 
  'definition':'Localhost is a special hostname in computer networking that points to the current computer itself, primarily used for accessing network services running on the same machine via the loopback network interface, serving loopback purposes.', 
  'reference':'https://en.wikipedia.org/wiki/Localhost'},

  {'id':34, 'term':'Shell script', 
  'definition':'Shell scripts are text files containing a series of commands written in a shell-specific scripting language, like Bash, designed to automate tasks and processes on a computers command-line interface. ', 
  'reference':'https://www.techtarget.com/searchdatacenter/definition/shell-script'},

  {'id':35, 'term':'Ansible', 
  'definition':'Ansible is a suite of software tools that enables infrastructure as code. It is open-source and the suite includes software provisioning, configuration management, and application deployment functionality', 
  'reference':'https://en.wikipedia.org/wiki/Ansible_(software)'},

  {'id':36, 'term':'Puppet ', 
  'definition':'Puppet is a software configuration management tool which includes its own declarative language to describe system configuration.', 
  'reference':'https://en.wikipedia.org/wiki/Puppet_(software)'},

  {'id':37, 'term':'Hashicorp Configuration Language (HCL) code', 
  'definition':'HCL code is a set of instructions used to describe how to create and manage computer infrastructure, making it easier for people to set up and control their cloud resources with clear and organized instructions.', 
  'reference':'https://www.shecodes.io/athena/2110-what-is-hcl-infrastructure-automation-language'},

  {'id':38, 'term':'Azure CLI', 
  'definition':'It is an Azure command-line tool used to authenticate with Azure and give Terraform access to our Azure account. ', 
  'reference':'https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/06.htm'},

  {'id':39, 'term':'Kubernetes clusters ', 
  'definition':'Kubernetes clusters are comprised of one master node and a number of worker nodes. These nodes can either be physical computers or virtual machines, depending on the cluster', 
  'reference':'https://www.vmware.com/au/topics/glossary/content/kubernetes-cluster.html'},

  {'id':40, 'term':'Docker Swarm', 
  'definition':'Docker Swarm helps to take care of lots of containers all at once. It makes sure they work together, stay balanced, and find each other easily, which makes it simpler to handle many of these little programs when you need to.', 
  'reference':'https://docs.docker.com/engine/swarm/'},

  {'id':41, 'term':'Virtual Machine(VM)', 
  'definition':'A virtual machine is like a computer inside your computer. It acts like a real computer, and can be used to run different operating systems or even have a whole new computer inside your computer.', 
  'reference':'https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-a-virtual-machine'},

  {'id':42, 'term':'Nodemon ', 
  'definition':'Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes.', 
  'reference':'https://learning.oreilly.com/library/view/server-side-development/9781789345391/e2ac19e3-1bb0-4a10-8baf-3ea96b77c5b2.xhtml'},

  {'id':43, 'term':'Terraform', 
  'definition':'Terraform, by HashiCorp, is a tool for coding and automating cloud infrastructure, streamlining resource provisioning and management with code-based simplicity. It automates infrastructure deployment, enhancing efficiency and consistency.', 
  'reference':'https://en.wikipedia.org/wiki/Terraform_(software)'},

  {'id':44, 'term':'Dependencies', 
  'definition':'Dependencies are like essential parts that software needs inorder to function properly. They include libraries or modules and are automatically added when you set up or run the software, ensuring it has all the necessary resources to work correctly.', 
  'reference':'https://learn.microsoft.com/en-us/azure/azure-monitor/app/asp-net-dependencies'},

  {'id':45, 'term':'Docker volumes', 
  'definition':'Docker volumes are like storage compartments for Docker containers. They provide a way to persist data and share it between containers or between the host machine and containers. This is essential for storing important information such as databases, configuration files, or application data, ensuring that data is not lost when a container is stopped or removed.', 
  'reference':'https://earthly.dev/blog/docker-volumes/'},

  {'id':46, 'term':'Software as a service', 
  'definition':'Software as a service (or SaaS) is a way of delivering applications over the Internet—as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.', 
  'reference':'https://www.salesforce.com/au/saas/'},

  {'id':47, 'term':'OpenShift', 
  'definition':'OpenShift, created by Red Hat, is a platform that helps with managing containerized applications using Kubernetes as its foundation. It offers a suite of tools to simplify the development and deployment of applications in a container-based and cloud-native environment, making it more accessible for organizations.', 
  'reference':'https://www.tutorialspoint.com/openshift/index.htm'},

  {'id':48, 'term':'Jenkins', 
  'definition':'Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration, and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.', 
  'reference':'https://en.wikipedia.org/wiki/Jenkins_(software)'},

  {'id':49, 'term':'Alpine Linux', 
  'definition':'Alpine Linux is a compact, secure, and minimalistic Docker image built on musl libc and BusyBox. Its tiny footprint, sometimes as small as 5MB, allows for speedy deployment, making it well-suited for microservices or large clusters.', 
  'reference':'https://www.linkedin.com/advice/0/how-do-you-scale-deploy-docker-alpine-ubuntu-containers'},

  {'id':50, 'term':'Kubectl', 
  'definition':'The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.', 
  'reference':'https://kubernetes.io/docs/tasks/tools/'},

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 DevOps Glossary', subtitle:'Welcome to my collection of DevOps Glossary', names: nameList});
});

module.exports = router;
