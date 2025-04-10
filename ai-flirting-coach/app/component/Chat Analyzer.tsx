import { useState } from 'react';

const ChatAnalyzer = () => {
  const [chatInput, setChatInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleAnalyzeChat = async () => {
    try {
      const response = await fetch('http://localhost:3000/chat-analyzer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatHistory: chatInput }),
      });
      const data = await response.json();
      setAnalysisResult(data.analysis);
    } catch (error) {
      console.error('Error analyzing chat:', error);
    }
  };

  return (
    <div>
      <h2>Chat Analyzer</h2>
      <textarea
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Paste your chat here..."
      />
      <button onClick={handleAnalyzeChat}>Analyze Chat</button>
      {analysisResult && <p>Analysis: {analysisResult}</p>}
    </div>
  );
};

export default ChatAnalyzer;
