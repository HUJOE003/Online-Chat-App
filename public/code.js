(function () {
    const app = document.querySelector(".app");
    const socket = io("https://your-heroku-app.herokuapp.com"); // Update with your Heroku server URL
    let uname;

    app.querySelector(".join-screen #join-user").addEventListener("click", function () {
        let username = app.querySelector(".join-screen #username").value;
        if (username.length === 0) {
            return;
        }
        socket.emit("newuser", username);
        uname = username;

        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    app.querySelector(".chat-screen #send-message").addEventListener("click", function () {
        let message = app.querySelector(".chat-screen #message-input").value;
        if (message.length === 0) {
            return;
        }

        renderMessage("mine", {
            username: uname,
            text: message,
        });

        socket.emit("chat", {
            username: uname,
            text: message,
        });

        app.querySelector(".chat-screen #message-input").value = "";
    });

    socket.on("update", function (update) {
        renderMessage("update", update);
    });

    socket.on("chat", function (message) {
        renderMessage("you", message);
    });

    app.querySelector(".chat-screen #exit-chat").addEventListener("click", () => {
        socket.emit("exituser", uname);
        window.location.href = window.location.href;
    });

    function renderMessage(type, message) {
        let messageContainer = app.querySelector(".chat-screen .messages");

        if (type === "mine") {
            let el = document.createElement("div");
            el.setAttribute("class", "message my-message");
            el.innerHTML = `<div>
                <div class="name">You</div>
                <div class="text">${message.text}</div>
            </div>`;
            messageContainer.appendChild(el);
        } else if (type === "you") {
            let el = document.createElement("div");
            el.setAttribute("class", "message other-message");
            el.innerHTML = `<div>
                <div class="name">${message.username}</div>
                <div class="text">${message.text}</div>
            </div>`;
            messageContainer.appendChild(el);
        } else if (type === "update") {
            let el = document.createElement("div");
            el.setAttribute("class", "update");
            el.innerText = message;
            messageContainer.appendChild(el);
        }

        // Ensure the chat scrolls to the latest message
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();
