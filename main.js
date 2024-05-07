// video stop and start
var video = document.getElementById("myVideo");

    video.addEventListener("mouseover", function() {
      video.pause();
    });

    video.addEventListener("mouseout", function() {
      video.play();
    });


// images growing
document.querySelectorAll('.js-t-line').forEach((element, index) => {
    setTimeout(() => {
        element.style.transform = `translate(0px, ${index * 30}px)`;
    }, index * 1000);
    });

// navbar changing color
window.onscroll = function() {
    var navbar = document.getElementById('topBar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    };

// read more button
document.getElementById('read-more').addEventListener('click', function() {
var moreText = document.getElementById('more-text');
if (moreText.style.display === 'none') {
    moreText.style.display = 'inline';
    this.textContent = 'Read Less';
} else {
    moreText.style.display = 'none';
    this.textContent = 'Read More';
}
});


// horizontal scrolls
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
