# datacraft blog

Some text to present the datacraft blog.


## Content
- Blog
- Best practices & convictions
- Open source contributions

## Installation

See docusaurus documentation.


## Machinery

### Tools

All of this work actually relies on the **npm** commannd and the **docusaurus** described hereafter:

 - --> npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs. Run npm help to get a list of available commands.

 - --> Docusaurus is a project for easily building, deploying, and maintaining open source project websites. Docusaurus is a tool in the Documentation as a Service & Tools category of a tech stack.

--

### Workflow

To work on this blog project, you must pull it to your local computer (after a possible fork) and make the changes locally.

 - **Development phase:** Every modification can then be tested locally via the command **npm run start** which is an alias for **docusaurus start --port 8080 --host 0.0.0.0** serving the blog locally on port 8080. It takes advantage of the hot reload feature that allows to modify the files (configuration and content) and see how it goes without the need to recompile.

 - **Building the project:** The **npm run build** command builds all the website static files for production which it stores in the `buil` directory. For Docusaurus to serve the files, two parameters are mandatory: **url** and **baseUrl**.

 - **Test before deployment:** The **npm run serve** commands allows to test the website as if it was on the web but before deployment for production. I didn't test but I think it does not have the hot reload feature, it uses the `build` directory and so it is more static. 