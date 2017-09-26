//select all panel
let panels = document.querySelectorAll('.panel');

//toggle the open class
function toggleOpen() {
    this.classList.toggle('open');
}

//toggle the open-active class
function toggleActive(e) {
       /* Safari transitionend event.propertyName === flex */
    /* Chrome + FF transitionend event.propertyName === flex-grow */
    if(e.propertyName.includes('flex')) {
        e.target.classList.toggle('open-active');
    }
}

//add event listener to each panel
panels.forEach(cur => cur.addEventListener('click', toggleOpen));
panels.forEach(cur => cur.addEventListener('transitionend', toggleActive));