import React, { useState } from 'react';

const notesData = [
  {
    title: "What is Ensemble Learning?",
    content: (
      <div>
        <p>
          Ensemble learning is a method where multiple models (called base learners or weak learners) are trained and combined to produce a better overall model than any individual one.
        </p>
        <p>
          Instead of relying on a single prediction model, ensemble methods merge the strengths of many models, making the final output:
        </p>
        <ul>
          <li>More accurate</li>
          <li>More robust</li>
          <li>Less prone to overfitting or underfitting</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="chart">📊</span> Key Types of Ensemble Methods (taught in COMP615):
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Key Idea</th>
              <th>Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bagging</td>
              <td>Train multiple models independently on bootstrapped samples and combine their results (e.g., average or vote)</td>
              <td>Parallel</td>
            </tr>
            <tr>
              <td>Boosting</td>
              <td>Train models sequentially, where each new model tries to correct the errors of the previous ones</td>
              <td>Sequential</td>
            </tr>
            <tr>
              <td>Stacking</td>
              <td>Train different types of models and combine their outputs using another model (meta-learner)</td>
              <td>Layered (not emphasized in labs)</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Why Use Ensemble Learning?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            "The main motivation is to reduce variance, reduce bias, and improve predictive performance."
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 11 slides</span>
        </p>
        <p>It’s especially powerful when:</p>
        <ul>
          <li>Individual models are weak but diverse</li>
          <li>The dataset is noisy or complex</li>
          <li>Overfitting is a risk</li>
        </ul>
      </div>
    )
  }
];

const styles = {
  container: { maxWidth: '800px', margin: '2rem auto', fontFamily: 'Segoe UI, Arial, sans-serif', color: '#222' },
  tabTitle: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-1px', color: '#1e3a8a' },
  dropdown: { 
    border: 'none',
    borderRadius: '10px',
    marginBottom: '2rem',
    background: '#fff',
    boxShadow: '0 4px 24px 0 rgba(30,58,138,0.08), 0 1.5px 4px 0 rgba(30,58,138,0.04)'
  },
  dropdownTitle: { 
    padding: '1.25rem 1.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    background: 'linear-gradient(90deg, #2563eb 0%, #1e3a8a 100%)',
    color: '#fff',
    borderRadius: '10px 10px 0 0',
    border: 'none',
    letterSpacing: '-0.5px'
  },
  dropdownContent: { 
    padding: '2rem 2rem 1.5rem 2rem',
    borderTop: '1px solid #e0e7ff',
    background: '#f8fafc',
    borderRadius: '0 0 10px 10px'
  }
};

export default function Notes() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.tabTitle}>Notes</div>
      {notesData.map((note, idx) => (
        <div key={idx} style={styles.dropdown}>
          <div
            style={styles.dropdownTitle}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            {note.title}
          </div>
          {openIdx === idx && (
            <div className="notes-content" style={styles.dropdownContent}>
              {note.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}