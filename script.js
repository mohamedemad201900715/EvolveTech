const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.text`, {delay:400, origin:'left'})
sr.reveal(`header , .main-heading , .our-team .text`, {delay:200, origin:'top'})
sr.reveal(`.supscribe form , .card ,.service-content .col, .supscribe p ,.info`, {delay:300, origin:'left'})
sr.reveal(`.contact-head .content form`, {delay:200, origin:'bottom'})

