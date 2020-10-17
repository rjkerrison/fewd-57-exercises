This all looks great Thai! Your html file is structured perfectly and in the css is fantastic that you are using rem measuring units they are brilliant for responsive design but it get very tricky and a bit of a tangled mess if not used with consistency.

I recommend the following:


Use px for:
* Image dimensions * Border widths
* Positioning

Use rem for:
* Font sizes
* Margin
* Padding 

Use percentages:
* For layout widths / max-widths

The main thing to remember is to set a font-size on the html and set all spacing/font sizes relative to it (with rem), then you can just reset html’s size for responsive viewports and everything else follows accordingly. Example below:

html {
font-size: 12px;
}

div {
font-size: 1.6rem;    // 19.2px
}

h2 {
font-size: 1.1rem;    // 13.2px 
padding: 0.55rem;     // 6.6px
margin: 0.2rem;       // 2.4px

Hope this is helpful! Well done again and see you Monday :) !