const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.text`, {delay:600, origin:'left'})
sr.reveal(`header`, {delay:200, origin:'top'})