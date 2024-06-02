import React, { useState } from 'react';
import lightimg from '../../assets/light1.png';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { text: "How can I assist you today?", sender: 'bot' }
  ]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);

      try {
        setGeneratingAnswer(true);
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
          method: 'post',
          data: { "contents": [{ "parts": [{ "text": inputValue }] }] },
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const botResponse = response.data.candidates[0].content.parts[0].text;
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
      } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        setMessages([...newMessages, { text: 'Sorry - Something went wrong. Please try again!', sender: 'bot' }]);
      }

      setInputValue('');
      setGeneratingAnswer(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "chat-container-black" : "chat-container"}>
        <h1 className='welcome-mesg'>Hello from Eventify! <span class={isDarkMode ? "welcome-id-black" : "welcome-id"}>Your perfect event planning companion</span><span><img src={lightimg} height='100em' alt='change mode' onClick={toggleMode}/></span></h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <input
        className='prompt'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your prompt here.."
        disabled={generatingAnswer}
      />
    </div>
  );
};

export default Chat;
