window.addEventListener('scroll',function() {
    let scrollPos = window.scrollY;

    this.document.querySelectorAll(".parallax").foreEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${scrollPos * speed}px)`;
    })
})
