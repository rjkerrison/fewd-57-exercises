This is really good Thai!
Structure is all good for html and css.
One thing I did notice on the css is that you are missing declaring box-sizing. I notmally add this on the *. Your code will still work without it the only thing is that resizing for responsive design or in more complex layouts it can become a bit of a nightmare.

* {
	box-sizing:border-box;
}

For the icons on the locals love and local complain about I would assign them a width as this will help you for them to conserve proportions when making a website responsive.

Let me know if you have any questions :)

