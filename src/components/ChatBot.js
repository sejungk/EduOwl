import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatBot.css';

const ChatBot = ({responses}) => {

  // Your OpenAI API key
 const API_KEY = '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';
 const [messages, setMessages] = useState([
  {
  role: "system",
  content:
  "Ask me a question!",
  },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const messageContainerRef = useRef(null);

  useEffect(() => {

    if (messageContainerRef.current) {
      // Scroll to the bottom of the message container when messages change
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }

    const fetchChatData = async (userMessage) => {
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [...messages, { role: 'user', content: userMessage }],
              temperature: 0.7,
            }),
          }
        );

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(`Oops! Something went wrong. Status: ${response.status}, Error: ${JSON.stringify(errorResponse)}`);
        }

        const responseData = await response.json();
        setIsTyping(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: responseData.choices[0].message.content,
          },
        ]);
      } catch (error) {
        console.error("Error while fetching chat data:", error.message);
        setIsTyping(false);
      }
    };

    if (isTyping) {
      // You can replace this with a message saying "Bot is typing..."
      fetchChatData("EduOwn is typing");
    }
  }, [isTyping, messages, API_KEY]);
  // const messages = [{ "role": "user", "content": "This is a test!" }];

  const handleSendMessage = (messageContent) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: messageContent },
    ]);
  //invoke chatData
    chatData(messageContent);
    setIsTyping(true);
  };

  const chatData = async (userMessage) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [...messages, { role: "user", content: userMessage }],
            temperature: 0.7,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Oops! Something went wrong while processing your request.");
      }

      const responseData = await response.json();
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: responseData.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error("Error while fetching chat data:", error);
      setIsTyping(false);
    }
  };

  return (
    <div className="chatBot">
      <div ref={messageContainerRef} className="messageContainer">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === "system" || message.role === "assistant" ? "owlMessage" : "userMessage"}`}
            >
            {message.role === "system"  || message.role === "assistant" ? (
            <h3>EduOwl</h3>
          ) : (
            <h3>{responses.name}</h3>
          )}
            <p>{message.content}</p>
          </div>
        ))}
        {isTyping && <p>EduOwl is typing...</p>}
      </div>
      <form
      onSubmit={(e) => {
      e.preventDefault();
      const input = e.target.input.value;
      if (input.trim() !== "") {
        handleSendMessage(input);
        e.target.reset();
      }
    }}
    >
      <input
          className="messageTextBox"
          type="text"
          name="input"
          placeholder="Type your message..."
          disabled={isTyping}
        />
        <img
          src="/images/message-send.svg"
          alt="Send"
          className="messageSendBttn"
          onClick={(e) => {
            e.preventDefault();
            const input = e.target.parentElement.querySelector('input').value;
            if (input.trim() !== "") {
              handleSendMessage(input);
              e.target.parentElement.reset();
            }
          }}
          style={{
            cursor: isTyping ? 'not-allowed' : 'pointer',
            opacity: isTyping ? 0.5 : 1,
          }}
        />
    </form>
  </div>
  );
};

export default ChatBot;

