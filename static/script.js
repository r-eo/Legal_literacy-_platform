document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("search");
    let legalCards = document.querySelectorAll(".legal-card");

    searchInput.addEventListener("keyup", function() {
        let query = searchInput.value.toLowerCase();
        legalCards.forEach(card => {
            let title = card.querySelector("h2").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
function showSection(category) {
    let sections = document.querySelectorAll(".info-section");
    sections.forEach(section => section.style.display = "none");

    document.getElementById(category).style.display = "block";
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }
    return true;
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Chatbot Functionality
document.getElementById('chatbot-send').addEventListener('click', function () {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
        addUserMessage(message);
        input.value = '';
        setTimeout(() => {
            addBotMessage("I'm a dummy chatbot. How can I assist you further?");
        }, 1000);
    }
});

function addUserMessage(message) {
    const messagesDiv = document.querySelector('.chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user-message');
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addBotMessage(message) {
    const messagesDiv = document.querySelector('.chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
