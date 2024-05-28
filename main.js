




// navbar changing color
window.onscroll = function() {
    var navbar = document.getElementById('topBar');
    var footer = document.getElementById('footer');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        footer.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        footer.classList.remove('scrolled');
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

// function to add scolling images
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


// tagline words
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("channel-link");


const enhance2 = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance2("channel-link2");


document.addEventListener('DOMContentLoaded', ()=>{
  // on button click
  document.querySelectorAll('.form-open').forEach(trigger=>{
      trigger.addEventListener('click', function() {
          // on every click
          document.querySelectorAll('body').forEach(target=>target.classList.add('no-scroll'));
      });
  }
  );

 

  document.querySelectorAll('.form-panel-close-trigger, .form-header-button').forEach(trigger=>{
    trigger.addEventListener('click', function() {
        // on every click

        setTimeout(function() {
            document.querySelectorAll('body').forEach(target=>target.classList.remove('no-scroll'));
        }, 500);
    });
}
);


});


document.getElementById('form-open-id').addEventListener('click', function() {
  var formPanel = document.getElementById('section-form-panel');
  console.log(formPanel);
  if (formPanel.style.display === 'none') {
      formPanel.style.display = 'block';
  } else {
      formPanel.style.display = 'none';
  }
  });

document.getElementById('form-open-id').addEventListener('click', function() {
    document.querySelector('.form-panel').style.transform = 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  });



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