import React, { useState, useEffect } from 'react';
import '../styles/ChatBot.css';

const ChatBot = ({responses}) => {

  // Your OpenAI API key
 const API_KEY = process.env.OPEN_API_KEY;
 const [messages, setMessages] = useState([
  {
  role: "EduOwl",
  content:
  "Ask me a question!",
  },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    console.log("Responses:", responses);

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

    if (isTyping) {
      // You can replace this with a message saying "Bot is typing..."
      fetchChatData("Typing message");
    }
  }, [isTyping, messages, API_KEY]);
  // const messages = [{ "role": "user", "content": "This is a test!" }];

  const handleSendMessage = (messageContent) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: responses.name, content: messageContent },
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
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <h3>{message.role}</h3>
            <p>{message.content}</p>
          </div>
        ))}
        {isTyping && <p>Bot is typing...</p>}
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

      {/* <button
        type="submit"
        disabled={isTyping}
      >
        Send
      </button> */}
    </form>
  </div>
  );
};

export default ChatBot;


      {/* <input
        className="messageTextBox"
        type="text"
        name="input"
        placeholder="Type your message..."
        disabled={isTyping}
      />
      <button
        type="submit"
        disabled={isTyping}
      >
        Send
      </button>
    </form>
  </div>
  );
};

export default ChatBot; */}
