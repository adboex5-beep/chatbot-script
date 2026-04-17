
  import Chatbot from "https://cdn.n8nchatui.com/v1/pole-embed-yard.js";
  Chatbot.init({
    "n8nChatUrl": "YOUR_N8N_CHAT_TRIGGER_NODE_WEBHOOK_URL",
    "metadata": {}, // Include any custom data to send with each message to your n8n workflow
    "theme": {
      "button": {
        "backgroundColor": "#000000",
        "right": 20,
        "bottom": 20,
        "size": 59,
        "iconColor": "#ffffff",
        "customIconSrc": "http://ngdjcompany.com/wp-content/uploads/2025/10/Untitled-design.png",
        "customIconSize": 100,
        "customIconBorderRadius": 16,
        "autoWindowOpen": {
          "autoOpen": true,
          "openDelay": 2
        },
        "borderRadius": "circle"
      },
      "tooltip": {
        "showTooltip": true,
        "tooltipMessage": "Let's Party!",
        "tooltipBackgroundColor": "#FF4E5B",
        "tooltipTextColor": "#ffffff",
        "tooltipFontSize": 15
      },
      "chatWindow": {
        "borderRadiusStyle": "rounded",
        "avatarBorderRadius": 25,
        "messageBorderRadius": 6,
        "showTitle": true,
        "title": "AI ASSISTANT",
        "titleAvatarSrc": "http://ngdjcompany.com/wp-content/uploads/2025/09/cropped-Untitled-design-2025-09-24T003301.154-1.png",
        "avatarSize": 40,
        "welcomeMessage": "Hi! How may I help you?",
        "errorMessage": "Please connect me to n8n first",
        "backgroundColor": "#ffffff",
        "height": 475,
        "width": 375,
        "fontSize": 16,
        "starterPromptFontSize": 15,
        "renderHTML": false,
        "clearChatOnReload": false,
        "showScrollbar": false,
        "botMessage": {
          "backgroundColor": "#FF4E5B",
          "textColor": "#ffffff",
          "showAvatar": true,
          "avatarSrc": "http://ngdjcompany.com/wp-content/uploads/2025/10/Untitled-design800.png",
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
          "sendButtonColor": "#FF4E5B",
          "maxChars": 75,
          "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 50 characters.",
          "autoFocus": true,
          "borderRadius": 6,
          "sendButtonBorderRadius": 50
        },
        "footer": {
          "text": "Powered By",
          "company": "Adboex",
          "companyLink": "https://adboex.com/",
          "textColor": "#f42525"
        }
      }
    }
    });
 
