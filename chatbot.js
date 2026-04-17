import Chatbot from "https://cdn.n8nchatui.com/v1/pole-embed-yard.js";

Chatbot.init({
  n8nChatUrl: "https://atharstackdev.app.n8n.cloud/webhook/f2bae9a6-9aac-47eb-9517-9cb72aea64c1/chat",
  metadata: {},
  theme: {
    button: {
      backgroundColor: "#ffc8b8",
      right: 20,
      bottom: 20,
      size: 59,
      iconColor: "#373434",
      customIconSrc: "https://www.svgrepo.com/show/362552/chat-centered-dots-bold.svg",
      customIconSize: 71,
      customIconBorderRadius: 16,
      autoWindowOpen: {
        autoOpen: true,
        openDelay: 2
      },
      borderRadius: "circle",
      draggable: false
    }
    // keep the rest of your code exactly the same
  }
});
