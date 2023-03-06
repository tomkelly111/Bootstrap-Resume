function sendMail(contactForm) {
    emailjs.send("service_8z5n2pj","template_jnc0og8", {
        "from_name" : contactForm.name.value,
        "from_email" : contactForm.emailaddress.value,
        "message" : contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
           console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}