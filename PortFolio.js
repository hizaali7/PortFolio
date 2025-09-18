function sendMail(event) {
    event.preventDefault(); // stop form reload

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "hizanali789";  // your EmailJS service ID
    const templateID = "template_wl2jrde"; // your template ID

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";

            console.log(res);
            alert("✅ Your Message Sent Successfully!");
        })
        .catch(err => console.error("❌ Failed to send message:", err));
}

