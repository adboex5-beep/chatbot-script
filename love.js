
  import Chatbot from "https://cdn.n8nchatui.com/v1/pole-embed-yard.js";
  Chatbot.init({
    "n8nChatUrl": "https://atharstackdev.app.n8n.cloud/webhook/f2bae9a6-9aac-47eb-9517-9cb72aea64c1/chat",
    "metadata": {}, // Include any custom data to send with each message to your n8n workflow
    "theme": {
      "button": {
        "backgroundColor": "#ffc8b8",
        "right": 20,
        "bottom": 20,
        "size": 59,
        "iconColor": "#373434",
        "customIconSrc": "https://www.svgrepo.com/show/362552/chat-centered-dots-bold.svg",
        "customIconSize": 71,
        "customIconBorderRadius": 16,
        "autoWindowOpen": {
          "autoOpen": true,
          "openDelay": 2
        },
        "borderRadius": "circle",
        "draggable": false
      },
      "tooltip": {
        "showTooltip": true,
        "tooltipMessage": "Welcome! Need Help?",
        "tooltipBackgroundColor": "#fff9f6",
        "tooltipTextColor": "#1c1c1c",
        "tooltipFontSize": 15,
        "hideTooltipOnMobile": true
      },
      "direction": "ltr",
      "allowProgrammaticMessage": false,
      "consentScreen": {
        "enabled": false,
        "title": "User Agreement",
        "message": "By using this chatbot, you agree to our\n<p><a href='/terms' target='_blank' style='color: black; text-decoration: underline; text-decoration-color: black;'>Terms & Conditions</a></p>",
        "textColor": "#1e1e1f",
        "acceptButtonColor": "#f36539",
        "acceptButtonTextColor": "#ffffff",
        "acceptButtonText": "Agree & Start Chatting",
        "backgroundColor": "#ffffff",
        "backdropColor": "#00000"
      },
      "chatWindow": {
        "borderRadiusStyle": "rounded",
        "avatarBorderRadius": 25,
        "messageBorderRadius": 6,
        "showTitle": true,
        "title": "Glow Skin Med Spa ",
        "titleAvatarSrc": "https://www.svgrepo.com/show/362552/chat-centered-dots-bold.svg",
        "avatarSize": 40,
        "welcomeMessage": "Hello! how can i help you?",
        "errorMessage": "Currently unavailable ",
        "backgroundColor": "#ffffff",
        "height": 600,
        "width": 400,
        "fontSize": 16,
        "starterPrompts": [
          "Who are you?",
          "What do you do?"
        ],
        "starterPromptFontSize": 15,
        "renderHTML": false,
        "clearChatOnReload": false,
        "showScrollbar": false,
        "botMessage": {
          "backgroundColor": "#FFC8B8",
          "textColor": "#000000",
          "showAvatar": true,
          "avatarSrc": "https://fixthisappliance.com/wp-content/uploads/Untitled-design800.png",
          "showCopyToClipboardIcon": false
        },
        "userMessage": {
          "backgroundColor": "#fff6f3",
          "textColor": "#050505",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
        },
        "textInput": {
          "placeholder": "Type your query",
          "backgroundColor": "#ffffff",
          "textColor": "#1e1e1f",
          "sendButtonColor": "#1f349e",
          "maxChars": 50,
          "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 50 characters.",
          "autoFocus": false,
          "borderRadius": 6,
          "sendButtonBorderRadius": 50
        }
      }
    }
    });
