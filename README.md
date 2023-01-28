# [Lost in Translation](https://lost-in-translation-eight.vercel.app/)

**What is Lost in Translation?**
* A website where the user can translate text into ASL and view their previous translations.

**What technologies were used?**
* The project was created using ReactJS, TailwindCSS, a JSON server deployed on Railway, and various ReactJS hooks. The ReactJS hooks used were React Hook Form and React Router as well as a custom hook I created in order to validate the user's login. TailwindCSS was used due to familiarity and the amount of styling needed wouldn't make the code too cluttered and/or unreadable. 

**What challenges were faced?**
* I underestimated the amount of code needed to create a presentable website that is able to translate into ASL. This resulted in the component tree being quite different from the initial component tree I created as a guide in Figma (see Figma_Lost_in_translation.pdf). This is mainly due to "exporting" snippets of code into more reusable ReactJS components rather than having inline component code.

**Feature breakdown**
* JSON server/db
  - Keeps track of the user's in terms of username, user ID, and previous translations made on the site. 
* Login page
  - Consists of a hero and a username input form that validates input to ensure that the username isn't too short, too long, or is empty. Once input is submitted the user's data (previous translations and ID) is fetched from the JSON server assuming the username already exists. If the username doesn't exist, a new entry is created in the db. Once this process is over the user info (username, ID, translation history) is stored in the session storage and the user is redirected to the translation page.
* Translation page
    - Mainly consists of a navbar, hero containing an input field, as well as a component that displays the input generated from the input field in ASL. Once a user has submitted their input it is checked for invalid characters (special characters and numbers) after which it is uploaded to the db and translated. The display component shows the ASL translation, as well as the input that generated said translation. The navbar contains the "logo" and name of the website along with a button that redirects the user to the profile page. 
* Profile page
  - Consists of a component which displays the user's 10 previous translations in reversed chronological order as well as a button that clears translations and a logout button. The logout button clears the session storage and redirects the user to the login page. 
