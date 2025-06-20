import React, { useState } from 'react';
import notesData from './notesData'; 

const styles = {
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  tabTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#2563eb',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  },
  card: {
    background: 'linear-gradient(90deg, #23233a 0%, #181825 100%)',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(30,58,138,0.08)',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    minHeight: 120
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: '1.15rem',
    color: '#a5b4fc',
    marginBottom: '0.5rem'
  },
  cardContent: {
    marginTop: '1rem',
    color: '#e0e7ef',
    fontSize: '1rem'
  },
  focusWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    minHeight: '60vh',
  },
  focusCard: {
    background: 'linear-gradient(90deg, #23233a 0%, #181825 100%)',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(30,58,138,0.18)',
    padding: '2.5rem 2rem 2rem 2rem',
    maxWidth: 700,
    width: '100%',
    position: 'relative',
    animation: 'fadeIn 0.2s'
  },
  closeBtn: {
    position: 'absolute',
    top: 18,
    right: 22,
    background: 'none',
    border: 'none',
    color: '#a5b4fc',
    fontSize: '2rem',
    cursor: 'pointer',
    lineHeight: 1,
    zIndex: 2,
    transition: 'color 0.2s'
  },
};

export default function Notes() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.tabTitle}>Notes</div>
      {openIdx === null ? (
        // Grid view: show all cards
        <div style={styles.grid}>
          {notesData.map((note, idx) => (
            <div
              key={note.title}
              style={styles.card}
              onClick={() => setOpenIdx(idx)}
            >
              <div style={styles.cardTitle}>{note.title}</div>
            </div>
          ))}
        </div>
      ) : (
        // Focus view: show only the open card, full width, with a close button
        <div style={styles.focusWrapper}>
          <div style={styles.focusCard}>
            <button
              style={styles.closeBtn}
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div style={styles.cardTitle}>{notesData[openIdx].title}</div>
            <div style={styles.cardContent}>{notesData[openIdx].content}</div>
          </div>
        </div>
      )}
    </div>
  );
}