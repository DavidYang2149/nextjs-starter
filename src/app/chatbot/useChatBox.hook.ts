import chatBotStore, { Message } from './chatBot.store';

export const useChatBox = () => {
  const { messages, input, addMessage, setInput } = chatBotStore();

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input } as Message;
    addMessage(userMessage);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.reply } as Message;
    addMessage(botMessage);

    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return { messages, input, handleSend, handleChange, handleKeyPress };
};
