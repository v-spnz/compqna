import React, { useState, useEffect } from 'react';
import QuizApp from './QuizApp';
import Notes from './Notes';

const tabBtnStyle = (isActive, theme) => ({
  padding: '0.75rem 2rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: 'none',
  borderBottom: isActive ? `3px solid ${theme === 'dark' ? '#fff' : '#1e3a8a'}` : '3px solid transparent',
  background: isActive ? (theme === 'dark' ? '#23233a' : '#f8fafc') : (theme === 'dark' ? '#181825' : '#f1f5f9'),
  color: isActive ? (theme === 'dark' ? '#fff' : '#1e3a8a') : (theme === 'dark' ? '#e0e6ed' : '#333'),
  cursor: 'pointer',
  outline: 'none',
  borderRadius: '8px 8px 0 0',
  transition: 'background 0.2s, color 0.2s'
});

const toggleBtnStyle = theme => ({
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  border: 'none',
  background: theme === 'dark' ? '#23233a' : '#f1f5f9',
  color: theme === 'dark' ? '#e0e6ed' : '#1e3a8a',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
  boxShadow: '0 1px 4px rgba(30,58,138,0.04)',
  transition: 'background 0.2s, color 0.2s',
  marginLeft: '1rem'
});

export default function App() {
  const [tab, setTab] = useState('quiz');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme}>
      {/* Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        margin: '2rem auto 0 auto',
        maxWidth: '900px'
      }}>
        <button style={tabBtnStyle(tab === 'quiz', theme)} onClick={() => setTab('quiz')}>Quiz</button>
        <button style={tabBtnStyle(tab === 'notes', theme)} onClick={() => setTab('notes')}>Notes</button>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={toggleBtnStyle(theme)}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      {/* Blue header and toggle button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '900px',
          margin: '2rem auto 0 auto',
          gap: '1.5rem'
        }}
      >
        <div
          style={{
            background: '#223e8a',
            color: '#fff',
            padding: '2rem 1rem 1.5rem 1rem',
            borderRadius: '10px',
            maxWidth: '800px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: 'bold',
              margin: 0,
              textAlign: 'center',
              width: '100%'
            }}
          >
            Data Structures & Algorithms Practice
          </h1>
        </div>
      </div>
      <div>
        {tab === 'quiz' && <QuizApp theme={theme} />}
        {tab === 'notes' && <Notes theme={theme} />}
      </div>
    </div>
  );
}