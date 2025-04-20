import React, { useState } from 'react';

const AIAgent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: 'Welcome back! Adam! How can I help you today?',
      time: '11:30'
    },
    {
      id: 2,
      sender: 'user',
      content: 'Hey, I want to create a new referral campaign, but I\'d like some help how to do it properly. I have a good number of users right now, but want to grow the network.',
      time: '11:32'
    },
    {
      id: 3,
      sender: 'bot',
      content: 'Absolutely! I\'d help you create a high-converting referral campaign that\'s easy to track and launch. Tell me your main objectives. What\'s the primary goal of your campaign?',
      time: '11:32'
    },
    {
      id: 4,
      sender: 'user',
      content: 'My main goal is to increase users from our website. I have existing customers who like my product, and I want to turn them into advocates to grow the userbase.',
      time: '11:33'
    },
    {
      id: 5,
      sender: 'bot',
      content: 'That\'s a great goal! Referral campaigns work best when there\'s a strong incentive on both sides - for existing users and the friends they refer.',
      time: '11:33'
    },
    {
      id: 6,
      sender: 'user',
      content: 'Should we start at settings?',
      time: '11:34'
    },
    {
      id: 7,
      sender: 'bot',
      content: 'I can suggest three common ways to encourage both referrers and referred persons. How does the next reward sound to you? (1) 20% account credit for referrers, and (2) 15% first order discount for new customers.',
      time: '11:35'
    },
    {
      id: 8,
      sender: 'user',
      content: 'What has received previous sign-up?',
      time: '11:36'
    },
    {
      id: 9,
      sender: 'bot',
      content: 'Our records like a similar incentive level. New visitors value a financial incentive most. When should this referral campaign launch? Do you have a timeframe?',
      time: '11:36'
    },
    {
      id: 10,
      sender: 'user',
      content: 'That\'s a good way to check that the campaign aligns with financial factors. How long do you want this referral campaign to run?',
      time: '11:37'
    },
    {
      id: 11,
      sender: 'bot',
      content: 'We should run this campaign for a wide testing reading any single audience for a month. A defined timeframe adds urgency. I\'d initially plan 3-4 weeks, then evaluate results and possibly extend if it\'s performing well.',
      time: '11:38'
    },
    {
      id: 12,
      sender: 'bot',
      content: 'Let\'s review the key elements for your campaign:',
      options: [
        'Track the main metrics',
        'Launch ASAP, optimize as you collect data',
        'Promotion: Reward to giver when the referred person makes a purchase',
        'Duration: 3 months'
      ],
      time: '11:38'
    },
  ]);
  
  const [inputText, setInputText] = useState('');
  
  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'user',
        content: inputText,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
      }]);
      setInputText('');
      
      // Simulate AI response (would be replaced with actual API call)
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          sender: 'bot',
          content: 'I understand your request. How can I help you further with this?',
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
        }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="ml-2 font-medium">AI Agent</span>
        </div>
        <button className="px-3 py-1 text-sm rounded-md border border-gray-300">
          Reset
        </button>
      </div>

      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 rounded-lg p-3 ${message.sender === 'user' ? 'bg-gray-800 text-white' : 'bg-white border border-gray-200'}`}>
              {message.sender === 'bot' && (
                <div className="flex items-center mb-1">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              <div>
                {message.content}
                {message.options && (
                  <div className="mt-3 bg-blue-50 rounded-md p-3">
                    <ul className="list-disc ml-4 space-y-1 text-blue-700">
                      {message.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                    <div className="flex mt-3 space-x-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex-1">Edit</button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md flex-1">Launch</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-1 text-right">
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="border-t p-3 bg-white">
        <div className="text-sm font-medium mb-2">Quick Links</div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button className="px-3 py-1 text-sm rounded-md border border-gray-300 whitespace-nowrap">
            💼 New campaign
          </button>
          <button className="px-3 py-1 text-sm rounded-md border border-gray-300 whitespace-nowrap">
            📊 Recent campaigns
          </button>
          <button className="px-3 py-1 text-sm rounded-md border border-gray-300 whitespace-nowrap">
            👥 Get insights
          </button>
          <button className="px-3 py-1 text-sm rounded-md border border-gray-300 whitespace-nowrap">
            🔍 Help me optimize
          </button>
        </div>
      </div>

      {/* Input area */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;