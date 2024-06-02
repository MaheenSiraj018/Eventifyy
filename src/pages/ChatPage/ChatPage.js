import React from 'react';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/Chat';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <>
      <Header />
      <div className="chat-main">
        <Chat />
      </div>
    </>
  );
}

export default ChatPage;
