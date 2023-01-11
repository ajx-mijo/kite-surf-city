# Layby Readme

## Description

Layby was a group project at General Assembly focussed around building out a Full-Stack application utilising MongoDB/React Framework to be deployed on Heroku with a focus on great functionality and excellent UX.

## Deployment Link - [Layby](https://layby-van.herokuapp.com/)

![Project Screenshot](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452946/readMe3/image8_lyxx6o.png)

## Timeframe & Working Team
The timeframe for this project was 10 days from planning to delivery and I worked as part of a three person team for the duration of the project.




## Technologies Used

- React (React-Bootstrap, React Router, React Icons)
- Node JS
- Public APIs
- Express API
- Mapbox GL
- SCSS
- npm packages
- Axios
- GitHub
- Google Chrome DevTools
- Mongoose
- MongoDB
- Excalidraw


## Brief
The brief set out by the instructional team was to build out a Full-Stack application with full CRUD functionality to be deployed on Heroku. The focus was on creating a complete product from the Front-End through to the Back-End with excellent User Experience and a well-thought out User Story. A further emphasis was placed on a visually impressive design and considered integrations of third-party APIs when and if necessary to improve functionality and UX across the app.

## Planning

![Mobile Wireframe](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452946/readMe3/image8_lyxx6o.png)

In planning the project, we started out by deciding the theme of our application, a community-based ‘Van-Life’ travel site. This decision was taken as all three members of the team had experience with this topic and saw an opportunity to provide a service/forum where there wasn’t currently an existing option. Following on from this, we began to wireframe out the different application pages using Excalidraw and considered the general user-story across these pages whilst considering the functionalities we would have to build in to deliver on our goals.

![Web Wireframe](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452946/readMe3/image8_lyxx6o.png)

We adopted a Mobile-First design approach to ensure ideal UX across all device sizes.  At this point, we created a Trello board to manage the workflow of our project and allow greater flexibility in the build process of components and functionalities. Once established, we  moved on to focus on a plan for our data structure and relationships on the back-end as well as creating a framework for our seed data. Finally, we considered what middleware, routers, controllers and packages we would require across the project as well as discussing internal project deadlines and priority tasks to make sure our work remained on track for completion.

![Mobile Wireframe 2](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452944/readMe3/image4_cinjg0.png)

## Build/Code Process

As mentioned in the ‘Planning’ section of this Readme as a team we worked from a Trello board to break-down the functionalities/components into manageable individual components. That being said, we worked together closely through-out the project conducting stand-ups at least twice a day (morning/mid-afternoon) whilst always being on hand to jump in and help solve any recurrent challenges collaboratively. We kept open channels of communication using Slack and Zoom throughout the project.

To begin with, we built out the back-end including Schemas, the router, our middleware and database seed. Simultaneously, the skeleton of the Front-End was built out so that once the Back-End was completed the whole team would be working within the same framework on the Front-End with the objective being to minimise the likelihood of merge conflicts on the shared project repository on GitHub.

The Back-End, now including our secure route and helper functions for our controllers was basically complete by the end of our second day on project, at which time most of the focus switched to the Front-End of the project and successfully integrating the Back-End of the project with our Front-End.

![Code Screenshot - Back-End Controller](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452946/readMe3/image6_wlpqww.png)

I took responsibility at this point for building out the Location Index, Navbar and Individual Location pages with all the functionalities contained within. The initial focus of this effort was to create a Search Bar/ Dropdown Item functionality on the index page and to lay out the basic format through the React-Bootstrap Row/Col/Card structure. Once this had been completed, I moved onto the Single Location page which we predicted (alongside the profile page) was going to have the highest average Time-On-Page on our site. 

When building out the Single Location page the primary objective was for the page to be visually engaging, informative and naturally interactive. To achieve these objectives, I built out a React Carousel component to display the images related to the specific location and then an Infographic Component using React-Icons to display and convey information to users in a more visually stimulating and interesting manner. I broke down the page information into two tabs: one for information related to the individual location and another to allow for user engagement through leaving rated reviews which were instantly viewable on the page as well as in the User Profile.

![Code Screenshot - Review Function](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452946/readMe3/image9_i9uj31.png)

To add further depth to the information available to the user I utilised MapBox GL to import and display a map that was dynamically centred on the latitude and longitude of the Van Location. 

![Code Screenshot - MapBox GL](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452946/readMe3/image7_qmssrp.png)

Once the single page’s functionality was complete I created our Authentication functions for use across the Front-End to allow for full CRUD functionality before conditionally displaying Edit/Delete buttons on locations when the relevant user was logged in and viewing the Single-Location page.

All throughout this process, I was regularly jumping in with my team-mates to help resolve any issues around their Front-End focusses. Nick, who was working on the Profile page had a difficult task in manipulating our data to display in the desired manner on the Profile so to support him so we regularly did some collaborative troubleshooting to accelerate this process and I helped iron out some issues with Axios requests which weren’t returning any data and using State to display information in the desired manner.

Finally, our focus turned to styling and implementing the clean, minimalist design language across all pages with a White/Grey colour scheme with Dark Red accent. As mentioned, we followed a Mobile-First philosophy to improve utility across all devices. I designed a logo and then we all spent the last two days of the project styling out all pages to create a more unified feel to the site and imported external content to add more depth to our site in relation to the ‘Van-Life’ community.

![Project Screenshot - Widget](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452945/readMe3/image3_uvo9ew.png)























## Challenges

- We created a complicated nested data-structure with multiple embedded relationships on our data schema which made the process of populating the User profile through referenced relationships a more complex and time consuming process. We resolved this issue by using a virtual property and a getter to populate a User with their individual reviews. In the future we would probably implement a different data structure if that is something within our control. Although, it was a great learning experience.

![Code Screenshot - Populated User Schema](https://res.cloudinary.com/doqbnr4p6/image/upload/v1673452945/readMe3/image5_kvffof.png)

- By and large working on a shared repository went smoothly although there were a few occasions when we had to disentangle conflicts on the Front-End (mainly on the SCSS file).


## Wins
- A visually accommodating and engaging site with full CRUD functionality for the user.
- Building a useful product that considers market requirements and offers something new.
- On a personal note, building out the index and single location pages as well as writing and re-factoring a lot of the controllers and helper functions on the middle/back-end.







## Key Learnings/Takeaways

- Breaking down challenges into bite-sized pieces before tackling is a far more dynamic method of building out an application.
- Complex data structures can quickly complicate and slow-down the rate of production.
- Working together in a team requires careful planning and excellent communication as well as greater flexibility than solo or indeed pair work. It was a thoroughly enjoyable experience and helping others work through challenges brings greater clarity to processes and improves problem solving capability.



## Bugs

- There aren’t any significant bugs currently within the project - the main areas of desired improvement are listed below.


## Future Improvements

- Build out the display functionality of the User Profile page to include any destinations they have added to the site.
- Implement a ‘favourite’ system, again to be displayed on each User’s profile page
- Further styling changes to add depth to the site and improve UX. (Changing the carousel card display on larger screen sizes to display more info).
- Improved error handling.

