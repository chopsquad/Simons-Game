# Simon`s Game

This is webpage game, based off the very popular "Simons Game" Simon`s Game is an electronic game of memory skill. In the game you have four different colors and each color makes a different sound. The user is required to repeat the sequence. If the sequence is done correctly then the series becomes harder and harder, until the user fails or time runs out and the game is over.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- [x]Adding javascript and jquery
- [x]Testing to see if javascript and jquery are working
- [ ]Creating a new pattern

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
-
- [Jquery](https://code.jquery.com/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

-Adding jquery to out html file, must be added before the js file

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script src="script.js"></script>
```

- How to select a specific element using JQuery

```js
$("element") //selects all of the elements
$("element.class") //selects only the ones with the specified class
$("element#id")// only with the specified ID

}
```

- How to add a flash effect to a selected elements

```js
$("element").fadeOut(100).fadeOut(100).fadeIn(100).fadeOut(100);
//this could later give us problems but for now this was the easiest method
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Jquery google link](https://developers.google.com/speed/libraries) - This helped me find the latest JQuery hosted library on google. I then used this script in the html file.
- [Adding a flash effect with JQuery](https://stackoverflow.com/questions/275931/how-do-you-make-an-element-flash-in-jquery) - Here i learned a lot about different ways to add a flash effect on the element you have selected.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
