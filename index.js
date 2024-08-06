document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values and ensure proper encoding for the URL
    const name = encodeURIComponent(
      document.getElementById("name").value.trim()
    );
    const pickUpLocation = encodeURIComponent(
      document.getElementById("pick-up-location").value.trim()
    );
    const pickUpContact = encodeURIComponent(
      document.getElementById("pick-up-contact").value.trim()
    );
    const pickUpItem = encodeURIComponent(
      document.getElementById("pick-up-item").value.trim()
    );
    // const deliveryLocation = encodeURIComponent(
    //   document.getElementById("delivery-location").value.trim()
    // );
    // const deliveryContact = encodeURIComponent(
    //   document.getElementById("delivery-contact").value.trim()    // );

    // Construct the message to be sent via WhatsApp with constant text
    const message = `
    T-Mobile Logistics

    Name: ${decodeURIComponent(name)}
    
    Pick-up Location: ${decodeURIComponent(pickUpLocation)}
    
    Pick-up Contact: ${decodeURIComponent(pickUpContact)}
    
    Pick-up Item(s): ${decodeURIComponent(pickUpItem)}`.trim();

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
