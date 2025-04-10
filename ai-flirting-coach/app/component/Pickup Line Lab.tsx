import { useState } from 'react';

const PickupLineLab = () => {
  const [situation, setSituation] = useState('');
  const [pickupLine, setPickupLine] = useState('');

  const handleGenerateLine = async () => {
    try {
      const response = await fetch('http://localhost:3000/pickup-line', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ situation }),
      });
      const data = await response.json();
      setPickupLine(data.pickupLine);
    } catch (error) {
      console.error('Error generating pickup line:', error);
    }
  };

  return (
    <div>
      <h2>Pickup Line Lab</h2>
      <textarea
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        placeholder="Describe the situation..."
      />
      <button onClick={handleGenerateLine}>Generate Pickup Line</button>
      {pickupLine && <p>Your Pickup Line: {pickupLine}</p>}
    </div>
  );
};

export default PickupLineLab;
