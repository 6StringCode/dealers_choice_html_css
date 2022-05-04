/*I finally got some mouse-over interactivity, but not quite the way I want it. 
Using .querySelector only selects the first element of its kind, which is expected, 
but querySelectorAll doesn't seem to work at all for me. So for now, at least I have 
the first link working to be highlighted. 
Eventually, I'd like to implement  better highlighting, and maybe sound when each link is clicked
*/

const nav = document.querySelector("a");

nav.addEventListener('mouseover', (ev) => {
    ev.target.style.backgroundColor = 'black';
});
nav.addEventListener('mouseout', (ev) => {
    ev.target.style.backgroundColor = 'purple';
});

//The below doesn't work and I don't know why. I don't seem to understand 
//some of the subtleties of the different Querying because querySelector 
//is the only one I can get to work on a consistent basis and I don't know why.
const dates = document.getElementsByTagName('li');

dates.addEventListener('mouseover', (ev) => {
    ev.target.style.fontSize = "30px";
});
dates.addEventListener('mouseout', (ev) => {
    ev.target.style.fontSize = '20px';
});

