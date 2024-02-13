function showSms() {
    var mySms = document.createElement("p");
    mySms.textContent = "Hi, there Do you wanna see something more...? Then hit the MailBox twice.";
    mySms.style.position = "fixed";
    mySms.style.bottom = "20px";
    mySms.style.right = "20px";
    mySms.style.backgroundColor = "#007bff"; // blue background
    mySms.style.color = "white";
    mySms.style.padding = "10px";
    mySms.style.borderRadius = "5px";
    mySms.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)"; // shadow
    mySms.style.fontSize = "16px";
    mySms.style.transition = "opacity 0.5s ease"; // Transition effect
    mySms.style.opacity = "0"; // Start with 0 opacity
    document.body.appendChild(mySms);
    
    // Trigger reflow to apply transition effect
    void mySms.offsetWidth;
    
    // Change opacity to 1 to fade in the message
    mySms.style.opacity = "1";
}