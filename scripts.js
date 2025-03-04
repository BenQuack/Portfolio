function moveGradient(e){
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.background = `radial-gradient(100px at ${x}px ${y}px, grey, white)`;
}

function scrollGradient(){
    const y = window.scrollY;
    const x = window.scrollX;
    document.body.style.background = `radial-gradient(100px at ${x}px ${y}px, grey, white)`;
}
