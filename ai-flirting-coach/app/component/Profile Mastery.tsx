import { useState } from 'react';

const ProfileMastery = () => {
  const [profileText, setProfileText] = useState('');
  const [profileSuggestions, setProfileSuggestions] = useState('');

  const handleGenerateSuggestions = async () => {
    try {
      const response = await fetch('http://localhost:3000/profile-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profileText }),
      });
      const data = await response.json();
      setProfileSuggestions(data.suggestions);
    } catch (error) {
      console.error('Error generating profile suggestions:', error);
    }
  };

  return (
    <div>
      <h2>Profile Mastery</h2>
      <textarea
        value={profileText}
        onChange={(e) => setProfileText(e.target.value)}
        placeholder="Describe your dating profile..."
      />
      <button onClick={handleGenerateSuggestions}>Generate Suggestions</button>
      {profileSuggestions && <p>Suggestions: {profileSuggestions}</p>}
    </div>
  );
};

export default ProfileMastery;
