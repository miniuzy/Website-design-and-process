# Front-End Web Assignment 2017
This readme will contain information about how I created my website and why it was created in the manner that it is. Furthermore, it will go into detail about the design process and ideas I initially had, what I did with these ideas and how I changed them after user testing, I will also refer to all the sources I have used. This website is based upon a person’s following of the sport football, allowing a user to monitor their favourite players through clips or monitor their favourite teams and their current best players. Additionally, the website allows these users to track where matches are being played as location varies a lot in football.
## Initial design
For my initial design I wanted to go with a multi-page application that contained majority of the information on a single page application, using photoshop I will provide a wireframe to show what my designs looked like. After thinking about multi page application I decided it would be easier for my current website to be single page and if I wanted to branch out to more football teams and players across the world then it would be better to implement a multi-page application.
##### Single Page Application
For my single page application (SPA) I decided to start at the nav bar as that would be key in how my website would look and is a requirement for single page applications to link with each piece of content, I started with the mobile query nav bar by having it open and close and used the same method to create a slightly different nav bar for the tablet query and finally I left a normal nav bar for the desktop query.
My wireframe sketches
![SPA wireframe](/img/wf1.png)
![SPA wireframe1](/img/wf2.png)
![SPA wireframe2](/img/wf3.png)
![SPA wireframe3](/img/wf4.png)


## PARC
### Proximity
Using the same styling throughout the website such as enough spacing to differentiate between articles and different colours for different articles., related content is grouped with each other such as all image contents are with each other allowing the user to find image content easier. The player stats on the figcaptions are done through using lists and nested lists, this makes it very easy to follow the stats.
### Alignment
Flexbox grid was used to align the images with each other in all media queries, also the map was aligned to scale as you enlarge the website, furthermore, for the mobile and desktop media query the banner is aligned with the main body. In mobile everything has perfect alignment from edge to edge with the title, banner and main body.
### Repetition
This was achieved by repeating colour layout between articles and repeating images with same CSS layout and having figcaptions. Also, the colour scheme between headings was repeated too. Rounded images were repeated using border radius to make it easy on the eye.
### Contrast
Contrast was done in my tab container where the tab looked to be in line with other colours used in the site when you were on that video and the video not being played would be in a black and white tab this allowed users to know which video they were watching. Additionally, a hover that expanded the images in desktop was put in to show users in a cluster of images which image they were focused on this was backed up with the figcaption that popped up when you hovered over one image. 
Colour scheme remains similar throughout all media queries and using a darker border on a light background makes it easier to identify headings.
## Information Architecture
The websites key purpose is to provide certain information that users want such as player statistics and fixture lists. The website is organised as updates to the website were required from testing and due to the organisation of the code it was not hard to implement a new feature on the website. The code is structured and so is the website, so you can update the website easily which will be required when updating the fixtures on a weekly basis. Content is labelled in an effective way as there is a different background colour as well as a different but complimentary border which helps the eye catch the heading, but the colours are not too contrasting that they are hard to look at it.
## Development Process
### Nav bar
The nav bar was created to be styled differently in each media query, I initially created it for mobile phones where the nav bar is hidden from the start and can be opened with a click, I came across one problem doing this when I put a banner image underneath it, the banner would not move when the nav bar opened and this caused overlap with the help of Fania there was a mistake in the CSS which I then promptly removed and it worked, the other two media queries nav bar went smoothly with no problems.
### Players, Leagues and Teams
I wanted to use images where when you hovered over them you were provided with text that described the image, I used a figure for the image and figcaption and I put this inside an article and a main div id which I used to apply CSS. When I first coded this, I had not put in it in an article which provided errors in my validation of html but apart from that there were not too many problems. The CSS for the figcaption was problematic when it came to mobile viewing as player stats were hidden due to being too big, I played around with the transform in the figcaption to cover the entire picture on mobile to provide the space needed for the text.
### Fixtures
I used Google Maps API to allow users to track when and where a football match was taking place, this would have to be updated weekly as football matches run on a weekly basis. There are markers that show where matches are taking place, and this is done through my JavaScript Script. The markers also have information when hovered such as showing which team is playing and at what time. The markers were created by finding the latitude and longitude coordinates of stadiums and putting them as a set point and then marking the set point.
### Videos
I used a tab container to do this piece of content, the reason why I went for this is so there is not an overload of videos for the user to see but rather they can scroll through them using the tabs. This was not in my initial design but was implemented later after some users had tested it and suggested that videos be added to the site.
### Sign up
This was the hardest thing out of all the content pieces I had a lot of problems with the JavaScript script I was using, I wanted a confirmation message when the user submitted their email and used alert, but it did not differ whether they clicked yes or no, Fania helped me correct this mistake by fixing the alert used in my else statement.
## Site Map
There is no site map included as the website is a single page application. A sitemap is generally a list of pages of the website, this is done to optimise your website for search engines by allowing them to know what content your website contains and how often it is updated.
## Accessibility
The site is easily accessible as the same layout is used throughout the website making it easy to identify content and allow you to update content easily. As the page is a single page application the nav bar is one of the most important things when browsing the website so to make the nav bar more accessible there is a top button which appears after you have scrolled down the site and clicking it sends you back to the top where the nav bar is located.
## Resources Used
* Notepad++
* Photoshop
* GitHub
* Blackboard
* Google Chrome
* Firefox
* Git
* Visual Studio


## Testing
### User Testing
I tested this website through two general types of people who access football websites, teenagers and adults. I asked them how I could improve the layout and additionally what other content I could bring that would make it easier for them to follow their favourite team or player. The found teenager no problems with the layout of my site but rather it was lacking content and suggested some sort of highlight reel for the players that are shown on the website, I implemented this using the tab panels to allow users to switch between videos easily. Additionally, the teenager complained that the banner did not scale well with the website, but this is an issue on the image used as it is only a placeholder and if I was to make this website ready for commercial use I would hire a graphic artist to design the sized banner of my choice. The adult had one critique and that was the nav bar was showing irrelevant information, when the nav bar can only be accessed at the top of the page and the news is directly under it there was no need for a news link in the nav bar which I then promptly removed.
The teenager that I tested on what my cousin and the adult was my brother both who follow football regularly.
### General Testing
I initially started testing on Google Chrome as that my is choice of browser, but with problems in my console due to my own extensions I decided half way that it would be better to finish the website on Firefox as I had no extensions on that browser. These are the only two browsers I have tested my website on. My website runs perfectly on both but provides certain console errors in Google Chrome but provides no console errors in Firefox which is what I developed my website in.
## References
* https://i.pinimg.com/originals/2d/4b/24/2d4b24977d53753734d7d00e485f83b8.jpg - banner image
* https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1010px-Manchester_United_FC_crest.svg.png - Man utd logo
* http://e0.365dm.com/17/09/16-9/20/skysports-paul-pogba-manchester-united_4098869.jpg?20171030110632 - Pogba image
* http://e1.365dm.com/17/02/16-9/20/skysports-anthony-martial-martial-goal-martial-man-utd_3889141.jpg?20170211163033 - Martial image
* http://e1.365dm.com/16/03/16-9/20/marcus-rashford-manchester-united-manchester-city_3434872.jpg?20160320162539 - Rashford image
* https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/732px-Real_Madrid_CF.svg.png - Real madrid logo
* http://e1.365dm.com/16/12/16-9/20/skysports-cristiano-ronaldo-real_3855043.jpg?20161218163243 - Ronaldo image
* http://e1.365dm.com/15/05/16-9/20/gareth-bale-real-madrid-football_3299339.jpg?20150505103704 - Bale image
* http://e2.365dm.com/17/04/16-9/20/skysports-asensio-real-madrid-la-liga_3939006.jpg?20170426191058 - Asensio image
* http://cdn.bleacherreport.net/images/team_logos/328x328/epl.png - logo for Barclays premier league

* https://www.youtube.com/watch?v=h5qZbOOPRwM - Youtube video 1
* https://www.youtube.com/watch?v=6DNt1Libvvs - Youtube video 2
* https://www.w3schools.com/ - Tutorials and go to the top button
* Front-End Web Development Lectures and Labs - Fania Raczinksi and Dave Everitt
* https://www.sketchingwithcss.com/samplechapter/cheatsheet.html - Flexbox help
* http://fontawesome.io/ - Font awesome icons
* Google Maps API


