Well done Sue!
There are some minor amends for your html file and and the css is looking pretty good. 
One thing to remember when doing css is the parent child relationship between elements, child elements will inherit text size, align , color from their parent so is best to only add this properties again when you are looking to make them different thant  the parent element.

I can see that you been trying to get the name of the city in the middle the middle of the image by adding display flex to the image element and that is not currently working maybe try making the li element a display flex and add a class name to each of the li  that matches the city they represent and then adding the image via background property, when trying this you have to completely remove the the image element from your html.

    li.city-container {
    
        display: flex;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .san-francisco {

        background-image: url(images/san-francisco.jpg);

    }

Let me know how you do when trying this and I can help out further :)
