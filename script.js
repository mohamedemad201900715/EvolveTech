const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.text`, {delay:400, origin:'left'})
sr.reveal(`header , .main-heading`, {delay:200, origin:'top'})
sr.reveal(`.supscribe form `, {delay:200, origin:'left'})
sr.reveal(`.service-content .col, .supscribe p`, {delay:200, origin:'left'})
sr.reveal(`.contact-head .content`, {delay:200, origin:'bottom'})

