'use client';

import { useChatBox } from "../_hooks/use-chat-box";

const ChatBot: React.FC = () => {
  const { messages, input, handleSend, handleChange, handleKeyPress } = useChatBox();

  return (
    <div className="flex flex-col h-screen">
    <header className="bg-primary text-primary-foreground p-4 flex items-center gap-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">CB</span>
      </span>
      <h1 className="text-lg font-medium">Chatbot</h1>
      <div className="ml-auto"></div>
    </header>
    <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
      {messages.map((msg, index) => (
        msg.sender === 'user' ? (
          <div key={index} className="flex items-start gap-3">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">{msg.sender}</span>
            </span>
            <div className="bg-muted rounded-2xl p-4 max-w-[70%]">
              <p>{msg.text}</p>
            </div>
          </div>
        ) : (
          <div key={index} className="flex items-start gap-3 justify-end">
            <div className="bg-primary text-primary-foreground rounded-2xl p-4 max-w-[70%]">
              <p>{msg.text}</p>
            </div>
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">{msg.sender}</span>
            </span>
          </div>
        )
      ))}
    </div>
    <div className="bg-background border-t p-4 flex gap-2">
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        type="button"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  </div>
  );
};

export default ChatBot;
