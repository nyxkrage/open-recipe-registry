# Pages
## Landing Page
Intro to site at the top  
Then 2 sections side-by-side showing most popular today, and this week.

## Login Page
Very basic, nothing fancy  
Login in with username/email and password, or use socials like google, facebook so on.

## Sign-up Page
Much like the Login page, sign up with email, username, password, confirm password, or use socials.

## Recipe Page
This is the main content page.  
This will show a title, ingredients list, instructions, slideshow on the right.  
At the bottom it should show some links to each tag(ingredient, nationality, ...) which will take you to the search page 

## Search Page
This will be a page to search for recipes, should be able to search by 
- name
- ingredients
- nationality
- difficulty
- rating

The filters would be located on the right, with the search bar at the top.
The results would be placed in a grid of `Card`s, and auto update as you type.

## History Page
This will show a history over changes to the recipe, and have the ability to view at certain change or revert.  
Also see who made the change, and easy button for admins to ban, either ip or user.

## Profile Page
Show contribution stats like Github, moderator status, qualifications, profile picture, and list of recipes contributed to.
![View of the github profile page and the contribution history/stats](/markdown-resources/github-contrib.png?raw=true)


## Settings Page
Settings, with a vertical category bar, and list of settings on the right.  
Either with a checkbox, list of radio buttons, or an input field for each settings

## Admin Page
Admin panel, with overview over stats, and ability to ban users based on username/id or ip.

# Components
## Navbar
The navbar should include OpenRecipe Registry on the left, followed by home, recipes, and search links, and title of current recipe if on one.  
Show active page with a bookmark-like effect like in a real book.  
Then on the right side show a login and signup button, if logged in, show logout link, and a profile picture, that links to the 
profile page
![Example of the bookmark-style active tab](/markdown-resources/navbar-bookmark-example.png?raw=true)

## Card
Card is used to show a small preview of a recipe, to be used on the `Landing Page` and on the `Search Page`  
It will contain the title of the recipe, the nationality, the first 2 or 3 main ingredients and a picture.  
Maybe it will also show the rating, or at the least have an option for it.

## Rating
The rating component will be used to display user ratings of a recipe or the ratings will reset when a new change to a recipe has been made, unless the change was declared "not-breaking"