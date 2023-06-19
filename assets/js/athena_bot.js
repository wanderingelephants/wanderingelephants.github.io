const BOT_NAME = "Athena";
const PERSON_NAME = "You";
(function(){
    function appendMessage(name, side, text) {
        //   Simple solution for small apps
        const msgHTML = `
          <div class="athena_bot-msg athena_bot-${side}-msg">
            <div class="athena_bot-msg-bubble">
              <div class="athena_bot-msg-info">
                <div class="athena_bot-msg-info-name">${name}</div>
                <div class="athena_bot-msg-info-time">${formatDate(new Date())}</div>
              </div>
      
              <div class="athena_bot-msg-text">${text}</div>
            </div>
          </div>
        `;
        const msgerChat = get(".athena_bot-msger-chat");
        msgerChat.insertAdjacentHTML("beforeend", msgHTML);
        msgerChat.scrollTop += 500;
      }
      
      async function botResponse(userQuery) {
          try{
            const spinner = get(".athena_bot-spinner");
            spinner.style.display = 'block';
            console.log("window.location.hostname", window.location.hostname);
                    const endpoint = "https://stageapi.delphi.games"
                    let res = await fetch(`${endpoint}/api/chatbot/botresponse`, {
                    method: "POST",
                    body: JSON.stringify({
                      "input": {
                        "arg1": {
                          "domain": window.location.hostname,
                          userQuery
                        }
                      }
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    })
                    const resp = await res.json();
                    console.log(resp);
                    appendMessage(BOT_NAME, "left", resp.message);
                    spinner.style.display = 'none';
                  }
                  catch(e){
                    console.log(e);
                    appendMessage(BOT_NAME, "left", "No response. Please try after some time.");
                    spinner.style.display = 'none';
                  }
        
      }
      
      // Utils
      function get(selector, root = document) {
        return root.querySelector(selector);
      }
      function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
      
        return `${h.slice(-2)}:${m.slice(-2)}`;
      }
      function createHtml(){
         
      const sectionHtml = `<section class="athena_bot-msger">
        <header class="athena_bot-msger-header">
          
          <div class="athena_bot-msger-header-title">
            <i class="fas fa-comment-alt"></i> Athena - Powered by Travelove.AI
          </div>
          <button class="athena_bot-close-button">&#10006;</button>
          
        </header>
      
        <main class="athena_bot-msger-chat">
          <div class="athena_bot-msg athena_bot-left-msg">
            <div class="athena_bot-msg-bubble">
              <div class="athena_bot-msg-info">
                <div class="athena_bot-msg-info-name">Athena</div>
                <div class="athena_bot-msg-info-time"></div>
              </div>
      
              <div class="athena_bot-msg-text">
                Hi ! Ask me about Neelambari Resort, in a language of your choice.
              </div>
            </div>
          </div>
      </main>
      
        <form class="athena_bot-msger-inputarea">
          <input type="text" class="athena_bot-msger-input" placeholder="Enter your message...">
          <div class="athena_bot-spinner"></div>
          <button type="submit" class="athena_bot-msger-send-btn">Send</button>
        </form>
        
      
      </section>
          `
         const btn = document.createElement('button');
         btn.classList.add('athena_bot-chat-button');
         btn.innerHTML = '&#9998;';
         document.body.appendChild(btn);
      
         const section = document.createElement('section');
         section.innerHTML = sectionHtml;
         document.body.appendChild(section);
      
      
          const msgerForm = get(".athena_bot-msger-inputarea");
      const msgerInput = get(".athena_bot-msger-input");
      const msgerChat = get(".athena_bot-msger-chat");
      const chatButton = get(".athena_bot-chat-button");
      const closeButton = get(".athena_bot-close-button");
      chatButton.addEventListener('click', () => {
          const chatContainer = get(".athena_bot-msger");
          chatContainer.style.display = 'flex';
          chatButton.style.display = 'none';
          closeButton.style.display = 'flex';
      });
      
      closeButton.addEventListener('click', () => {
          const chatContainer = get(".athena_bot-msger");
          chatContainer.style.display = 'none';
          chatButton.style.display = 'flex';
          closeButton.style.display = 'none';
      });
      msgerForm.addEventListener("submit", event => {
        event.preventDefault();
      
        const msgText = msgerInput.value;
        if (!msgText) return;
      
        appendMessage(PERSON_NAME, "right", msgText);
        msgerInput.value = "";
      
        botResponse(msgText);
      });
      
      }
      createHtml();
})();
    



