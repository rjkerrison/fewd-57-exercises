Jescel this looks really good and is great to see you trying properties like border radius to give things a different look!

Both files look great and are very well organized.
On the html I notice that you wrapped the a tag with a div but in this case this is not really needed so you cna remove it and allocate the class name of the div to the a tag. On the css you have repeated a couple of times this line of code "background-size: cover;" and there's not need for it really as you have already done so well at including it on li.destination

I also wanted to add something about css code organization for instance this would be a better organization of you li.destination styling properties:

li.destination {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;

    color: white;
    font-size: 32px;
    font-weight: 800;

    background-position: center;
    background-size: cover;
    border-radius: 10px;
  }

I will send you an image on slack to complement this explanation :)

Also remember adding this at the top of the css file

* {
  box-sizing: border-box;
}

Let me know if something is unclear via slack and happy to explain further!