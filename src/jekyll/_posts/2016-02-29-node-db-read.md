---
title: "Node Beginnings"
number: 6
layout: post
tags: ['node', 'express', 'mongodb', 'database', 'mvc', 'handlebars', 'heroku', 'javascript']
---

Well, this is embarrassing. 

Some of you may be wondering, "how is she going to code 52 projects in 52 weeks if the last project that she completed was before Thanksgiving?" I, too, am wondering the same thing, dear readers. But, don't despair! For I've just woken from a wonderful three-month food and vacation coma, armed with an idea for a web app. And thus I have decided to take the pluge into the wild world of Node.js.

This project hardly qualifies as an “app”, since all I’m doing is reading some very important kitten information from an incredibly complex database. But, for a node newb for whom the "server side" was still a dark and scary place, I picked up many of the basics. Though not necessary for such a small project, I also followed an MVC pattern because practice makes perfect.

<a href='https://kimcodes-kitten-database.herokuapp.com/' class='project-link' target='_blank'>
	<img src='/img/52projects/kitten-database.png' alt='A Very Kitten Database' />
	See the project
</a>

### The Tools

I used <a href="https://nodejs.org/en/" target="_blank">Node.js</a> and the <a href="http://expressjs.com/" target="_blank">Express</a> framework to build the application framework. <a href="https://www.mongodb.org/" target="_blank">MongoDB</a> is the database, and <a href="http://handlebarsjs.com/" target="_blank">Handlebars</a> is the templating for the views. The app is hosted on <a href="" target="_blank">Heroku</a>, with help from <a href="https://mlab.com/" target="_blank">mLab</a> as the cloud database service.

### The Basics, or Why MVC is your Friend

Coding an entire app can get messy. My first few tries at making a complete web app were a hot mess--hanging HTTP requests, a tangle of routes and views and database connections, crashing browsers, streaming error logs.

MVC is one of those much-discussed resume acronyms. It stands for model-view-controller, and one of its main tenants is in separating the logic of your application. As a node newb, I found that following an MVC framework also gave some guidance for an application structure that could otherwise quickly become unruly.

* The <strong>model</strong> deals with the database and only the database. It doesn't care about what the application looks like, or does, or that it even exists. The model simply reads and writes to the database.
* The <strong>controllers</strong> are the main logic of the application. They interpret incoming HTTP requests, and may fetch data, change the data and/or send the data to a view.
* Finally, the <strong>view</strong> displays the data to the browser.

### Connecting to the Database

One challenge I ran into was (drum roll) connecting to the database. In an early and very messed-up implementation, I was unable to make consecutive calls to the database without the application hanging. To fix that, I ended up connecting to the database just once and passing to the controller a reference to the database object.

<pre>
<code class="language-javascript">
var db; 

mongodb.MongoClient.connect(&gt;&gt;database address&lt;&lt;, function(err, database) {
	if (err) throw err;

	database.collection('kittens', function(err, results) {
		if (err) throw err;

		db = results;  // assign successful results to db variable
		app.listen(3000); // start server if db connection is successful
		appConfig(app);
	})
});


function appConfig(app) {
	// include controllers and pass db reference
	var controllers = require('./controllers/index')(db);

	// middleware
	app.use(controllers);
};
</code>
</pre>

### Deploying to Heroku

Heroku apps are managed via a git repository. Each time code is pushed to a certain branch (in this case, master), the app is built and deployed to Heroku. 

Getting set up with Heroku was blissfully easy. To ensure that the application can be used both locally and on Heroku without tons of manual changes, I had to ensure the port number could change depending on the environment. I'm sure I'll run into much more environment-specific configuration as I build more complex apps, but this was a good example to get thinking about it.

<pre>
<code class="language-javascript">
var port = process.env.PORT || 3000; // use Heroku's port number or default to 3000
</code>
</pre>

There you have it, folks: my first Node app. Since this is hosted on Heroku, the code lives in its own repository, which you can see <a href="https://github.com/kimberlyhawthorne/52projects_06" target="_blank">here</a>. 

If you know of any kitties who should be added to this exhaustive list, please contact me. In the meantime, excuse me while I head to New York City for just one more quick weekend getaway...