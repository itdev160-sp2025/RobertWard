//array to hold chat messages
var messages = [];

//initial seed data for messages held in array
var data = [
    { text: "Hello, welcome to the chat!", type: "in-message" },
    { text: "Thanks! Happy to be here.", type: "out-message" },
    { text: "Hello everyone!", type: "in-message" },
    { text: "Hi there!", type: "out-message" },
    { text: "How are you doing today?", type: "in-message" },
    { text: "I'm doing great, thanks. And you?", type: "out-message" },
    { text: "Good, just busy with work.", type: "in-message" },
    { text: "Same here. Anyone up for a quick call?", type: "out-message" },
    { text: "I can join in 5 minutes.", type: "in-message" },
    { text: "I'll be there too.", type: "out-message" },
    { text: "Can't wait to hear the updates.", type: "in-message" },
    { text: "Update: Just finished the project.", type: "out-message" },
    { text: "Wow, congrats!", type: "in-message" },
    { text: "Thanks, it was a team effort.", type: "out-message" },
    { text: "Does anyone have the latest reports?", type: "in-message" },
    { text: "Yes, I just sent them to your email.", type: "out-message" },
    { text: "Great, thank you!", type: "in-message" },
    { text: "No problem. Let's review them tomorrow.", type: "out-message" },
    { text: "Looking forward to it.", type: "in-message" },
    { text: "I have another question about the new feature.", type: "out-message" },
    { text: "Go ahead, please.", type: "in-message" },
    { text: "Is it compatible with older versions?", type: "out-message" },
    { text: "Yes, it should be backward compatible.", type: "in-message" },
    { text: "Perfect! Thanks for clarifying.", type: "out-message" },
    { text: "No worries.", type: "in-message" },
];

//message constructor function to create message objects
function Message(text, type){
    this.text = text;
    this.type = type;
}

//load initial seed data
function loadSeedData(){
    for (var i = 0; i < data.length; i++){
        var msgObj = new Message(data[i].text, data[i].type);
        messages.push(msgObj);
        addMessageToContainer(msgObj);
    }
}

//utility function to add a message element to the message container
function addMessageToContainer(message){
    var messageContainer = document.getElementById('message-container');
    var messageElement = document.createElement('div');
    messageElement.className = message.type;
    messageElement.textContent = message.text;
    messageContainer.appendChild(messageElement);
}

//Handler function to add a new message based on which button was clicked
function addMessageHandler(event){
    var messageInput = document.getElementById('message-input');
    var text = messageInput.value.trim();
    if (text === ""){
        return; //Do nothing if input is empty
    }

    var type;
    //switch statement to determine which button was clicked
    switch (event.target.id){
        case 'send-button':
            type = 'out-message';
            break;
        case 'reply-button':
            type = 'in-message';
            break;
        default:
            type = 'out-message';
    }
//construct a new message object and add it to the messages array
var newMessage = new Message(text, type);
messages.push(newMessage);
addMessageToContainer(newMessage);

//clear the input field after sending the message
messageInput.value = "";
}

//initialization function to load seed data and wire up event listeners
function init(){
    if (data.length > 0){
        loadSeedData();
    }
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
}

//initialize the app when the window loads
window.onload = init;

