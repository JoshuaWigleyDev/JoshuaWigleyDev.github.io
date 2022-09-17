
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    //threshold - appear when 75% of the target is in screen.
    threshold: 0.10,

    //appear when next target is =< -100px from the view 
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

    entries.forEach(entry => {

        //If entry isn't within threshold then don't do anything to this entry
        if(!entry.isIntersecting)
        {
            return;
        }else{

            //If target is within view then animate into view
            entry.target.classList.add("appear");

            //Stop observing this target not it's been displayed
            appearOnScroll.unobserve(entry.target);
        }
    })

}, appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
})