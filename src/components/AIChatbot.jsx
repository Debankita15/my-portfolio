// src/components/AIChatbot.jsx
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

// Define chatbot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#4682B4',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#4682B4',
  botFontColor: '#fff',
  userBubbleColor: '#FF6347',
  userFontColor: '#fff',
};

// Custom component to handle OpenAI API calls
const OpenAIResponse = ({ steps, triggerNextStep }) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState('');

  React.useEffect(() => {
    const fetchResponse = async () => {
      const userMessage = steps.userInput.value;

      try {
        const res = await axios.post('http://localhost:5000/api/chat', {
          message: userMessage,
        });

        const aiMessage = res.data.message;
        setResponse(aiMessage);
      } catch (error) {
        console.error(error);
        setResponse("Sorry, I couldn't process that. Please try again.");
      } finally {
        setLoading(false);
        triggerNextStep();
      }
    };

    fetchResponse();
  }, [steps.userInput.value, triggerNextStep]);

  return loading ? (
    <div>Typing...</div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {response}
    </motion.div>
  );
};

const AIChatbot = () => {
  const steps = [
    {
      id: 'welcome',
      message: 'Hello! I am your AI assistant. How can I help you today?',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      trigger: 'loading',
    },
    {
      id: 'loading',
      component: <OpenAIResponse />,
      waitAction: true,
      trigger: 'askAnother',
    },
    {
      id: 'askAnother',
      message: 'Is there anything else I can help you with?',
      trigger: 'userInput',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        headerTitle="AI Assistant"
        recognitionEnable={true}
        floating={true}
        animation="fade"
      />
    </ThemeProvider>
  );
};

export default AIChatbot;
