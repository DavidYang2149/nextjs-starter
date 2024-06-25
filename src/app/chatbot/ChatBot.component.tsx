'use client';

import styles from './chatbot.module.css';

import { useChatBox } from './useChatBox.hook';

const ChatBot: React.FC = () => {
  const { messages, input, handleSend, handleChange, handleKeyPress } = useChatBox();

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBot;
