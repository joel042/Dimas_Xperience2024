document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values and ensure proper encoding for the URL
    const name = encodeURIComponent(
      document.getElementById("name").value.trim()
    );
    const FullName = encodeURIComponent(
      document.getElementById("full-Name").value.trim()
    );
    const EmailAddress = encodeURIComponent(
      document.getElementById("email-address").value.trim()
    );
    const AmountPaid = encodeURIComponent(
      document.getElementById("amount-Paid").value.trim()
    );
    // const deliveryLocation = encodeURIComponent(
    //   document.getElementById("delivery-location").value.trim()
    // );
    // const deliveryContact = encodeURIComponent(
    //   document.getElementById("delivery-contact").value.trim()    // );

    // Construct the message to be sent via WhatsApp with constant text
    const message = `
    DIMAS XPERIENCE 2024 TICKET CONFIRMATION

    Name: ${decodeURIComponent(name)}
    
    Full Name: ${decodeURIComponent(FullName)}
    
    Email Address: ${decodeURIComponent(EmailAddress)}
    
   Amount Paid: ${decodeURIComponent(AmountPaid)}`.trim();

    // Construct the WhatsApp URL with the encoded message
    const phoneNumber = "+2348088943403"; // Replace with your phone number in international format
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");
  });

function clearForm() {
  document.getElementById("contact-form").reset();
}
