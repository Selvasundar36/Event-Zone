import React, { useState } from 'react';
import './ChatBotButton.css';

const faqResponses = {
  "what is cybertech": "Event'25 is a national-level tech symposium with events, workshops, and competitions for college students.",
  "when is the event": "Event'25 is on 12th October 2024 at ABC College of Technology, Salem.",
  "how to register": "Visit the Event'25 website and click 'Register'. Fill in your details and choose your events.",
  "what is web vision": "Web Vision is a web design challenge that promotes creativity and teamwork.",
  "what is pitch perfect": "Pitch Perfect is a presentation event focused on communication and idea pitching.",
  "what is connect and crack": "Connect & Crack is a puzzle-solving event that tests critical thinking and collaboration.",
  "are there prizes": "Yes! Winners receive certificates, trophies, and tech goodies.",
  "do i get a certificate": "Yes, all participants will receive digital certificates.",
};

const ChatBotButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi there! How can I help you with Event\'25?' },
  ]);
  const [input, setInput] = useState('');

  // 🎙️ Voice input
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
    recognition.start();
  };

  // 🤖 FAQ matching
  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = input.toLowerCase();
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const matchedKey = Object.keys(faqResponses).find(key =>
      userMessage.includes(key)
    );

    const botReply = matchedKey
      ? faqResponses[matchedKey]
      : "I'm not sure about that yet, but you can check the Event'25 website or ask an organizer.";

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <>
      <div className="chatbot-button" onClick={() => setOpen(true)}>
        💬 Need Help?
      </div>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>EVENT'25 Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="chatbot-body">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* 🔗 Quick Replies */}
            <div className="quick-replies">
              <button onClick={() => setInput("how to register")}>📝 Register</button>
              <button onClick={() => setInput("when is the event")}>📅 Schedule</button>
              <button onClick={() => setInput("are there prizes")}>🏆 Prizes</button>
              <button onClick={() => setInput("do i get a certificate")}>📄 Certificate</button>
            </div>

            {/* Input + Voice + Send */}
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button onClick={startListening} className='mic'>🎙️</button>
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;
