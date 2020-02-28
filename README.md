# Paper & Garden
## *A World Building Resource for Storytellers*

![logo](client/dist/builderlogo.png)

### Introduction
This project was a brief two-day sprint where I created the minimum viable product for an app of my own conception.

I decided to create an app for storytellers (novelists, screenwriters, etc.) to assist in world-building. I pared down the idea to the simplest idea waiting behind all of the scalable potential and began work. Though the timeline was rushed, I wanted to use this project as an opportunity to explore features new to me using raw React and CSS rather than utilizing libraries.

What I was able to complete in two days was a full-stack web application that takes in input about a fictional world and saves the information to a user's account.

### What does the app do?
* Paper & Garden offers a user-friendly way to develop fictional worlds.
* It was built for creators to save and expand upon the worlds of their fiction.
* Users are able to fill out information based on the prompts and reference them during the writing process.

### Tech stack
* Language: JavaScript
* Client: React, CSS
* Server: Express, Node.js
* Database: mySQL

### Challenges
* I learned how to use React hooks and specifically how to create custom hooks to create a fully-functional form without utilizing a pre-made library.
* I designed a SQL database that would be scalable with my stretch goals, yet I did it quickly enough to meet the two-day deadline.
*

### Gifs / Screenshots
* Minimum Viable Product:
  - User can submit data and retrieve that data
  - Front end is accessible and responsive
  - Back end is set up for future scalability
  ![HomePic](screenshots/homePic.png)
  ![FormGif](screenshots/gifForms.gif)
  ![ListGif](screenshots/gifWorldList.gif)

### How does the app work?
* When the user logs in, the information is validated via axios get request.
* When the user creates a new login, an axios post request sends the data through an Express/NodeJS server to a mySQL database, which only takes unique entries for usernames. If the username they desire already exists, it will send back an error to the client.
* When the user fills out a form, the information is saved in state via a custom React hook. 
* When the user submits a form, the information about the world they create is saved to their account via POST request.

### Required Research
* Though the project was to accomplish the MVP of the concept, I will be using a Feature Branch Workflow as it evolves.
* I implement Agile Practices to organize and execute this project.
* User stories, completed tickets, and stretch goals can be accessed at Paper & Garden's [Trello](https://trello.com/b/IzHFL3UD/papergarden)

### Future Plans
What additional features do you plan to add, how do you plan to implement those features?
* Scaling the database
* Stress-Testing and prepping for increased traffic as features evolve
* Additional features, such as character-building, plot development, utilizing APIs to autofill geographic information, and more.
* Sharpening the usability of the interface.
