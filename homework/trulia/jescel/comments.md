Well done Jescel! 
You got this working with an alternative solution than the one provide in the solution.
Using on-click works for this exercise but might not be the best option when more than function needs to run when clicking an element.

For instance:

If you were to have this html file:
<div id="first">First Element</div>
<div id="second">Second Element</div>

And the following script:

    const first = document.getElementById("first");
    const second = document.getElementById("second");
    function handler1() {
        alert("First handler");
    }
    function handler2() {
    alert("Second handler");
    }

    first.addEventListener("click", handler1);
    first.addEventListener("click", handler2);

    second.onclick = handler1;
    second.onclick = handler2;

Clicking the first element will trigger 2 alerts/Functions whilst clicking on the second element will  only trigger the second alert not both.
This is something to have in mind when using onclick.

Please do let me know if you want me to explain this further. 