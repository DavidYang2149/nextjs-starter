import { create } from 'zustand';

export type Message = {
  sender: 'user' | 'bot';
  text: string;
};

type ChatState = {
  messages: Message[];
  input: string;
  addMessage: (message: Message) => void;
  setInput: (input: string) => void;
};

const chatBotStore = create<ChatState>((set) => ({
  messages: [],
  input: '',
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  setInput: (input) => set(() => ({ input })),
}));

export default chatBotStore;
