document.querySelectorAll("h1, img").forEach(element => {
    element.animate(
        [
            { opacity: 0 }, 
            { opacity: 1 }  
        ],
        {
            duration: 1000, 
            fill: "forwards" 
        }
    );
});


setTimeout(() => {
    document.querySelectorAll("p, ul").forEach(element => {
        element.animate(
            [
                { transform: "translateY(20px)", opacity: 0 }, 
                { transform: "translateY(0)", opacity: 1 }   
            ],
            {
                duration: 1000, 
                fill: "forwards"
            }
        );
    });
}, ); 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
 
        entry.target.animate(
          [
            { transform: "translateX(20px)", opacity: 0 },
            { transform: "translateX(0)", opacity: 1 }
          ],
          {
            duration: 600,
            fill: "forwards"
          }
        );
      } else {
      WONT 
        entry.target.animate(
          [
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(20px)", opacity: 0 }
          ],
          {
            duration: 600,
            fill: "forwards"
          }
        );
      }
    });
  }, {
    threshold: 0.1
  });
  
 
  document.querySelectorAll("section").forEach(element => {
    observer.observe(element);
  });
  
  