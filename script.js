const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const themeToggle = document.getElementById('theme-toggle');

// Send message
sendBtn.addEventListener('click', () => {
  const msg = userInput.value.trim();
  if (msg) {
    appendMessage('user', msg);
    userInput.value = '';
    setTimeout(() => botReply(msg), 800);
  }
});

userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendBtn.click();
});

// Append messages
function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add(`${sender}-message`);
  msgDiv.textContent = text;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Bot reply (smart fake responses)
function botReply(userMsg) {
  const responses = {
    hello: "Hi there! 👋 I'm here to help.",
    help: "Sure! What do you need help with?",
    joke: "Why did the developer go broke? Because he used up all his cache 😅",
    quote: "💬 'Code is like humor. When you have to explain it, it’s bad.' – Cory House",
    default: "Hmm... I'm still learning that. Try typing 'help', 'joke', or 'quote'!",
  };

  const key = Object.keys(responses).find(k =>
    userMsg.toLowerCase().includes(k)
  );

  const reply = responses[key] || responses.default;
  appendMessage('bot', reply);
}

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '🌙';
});
