import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from './QuizContext'; // <-- Add this import
import initialQuestions from './data/questions.json';
import glossary from './data/glossary.json';

const styles = {
  container: { maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif', color: '#333' },
  header: { background: '#1e3a8a', color: '#fff', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  title: { textAlign: 'center', fontSize: '1.75rem', flex: 1 },
  score: { background: '#fff', color: '#1e3a8a', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 'bold', marginRight: '1rem' },
  resetBtn: { padding: '0.5rem 1rem', background: '#fff', color: '#1e3a8a', border: '2px solid #1e3a8a', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  glossaryBtn: { padding: '0.5rem 1rem', background: '#0c4a6e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginLeft: '1rem' },
  notesBtn: { marginLeft: '1rem', padding: '0.25rem 0.75rem', background: '#fbbf24', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', margin: '1.5rem 0 0.75rem', textAlign: 'center' },
  card: {
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  padding: '1rem',
  marginBottom: '1.5rem'
},
  cardWrapper: { position: 'relative' },
  questionNumber: { fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem' },
  questionText: { marginBottom: '0.75rem', fontWeight: '600' },
  options: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  optionBtn: { background: '#f0f4f8', border: '1px solid #ccc', borderRadius: '8px', padding: '0.75rem', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold' },
  correctBtn: { background: '#d1fae5', border: '2px solid #065f46', color: '#065f46' },
  incorrectBtn: { background: '#fee2e2', border: '2px solid #991b1b', color: '#991b1b' },
  summaryCorrect: { marginTop: '1rem', background: '#d1fae5', border: '2px solid #065f46', borderRadius: '4px', padding: '0.75rem', color: '#065f46', fontWeight: 'bold' },
  summaryIncorrect: { marginTop: '1rem', background: '#fee2e2', border: '2px solid #991b1b', borderRadius: '4px', padding: '0.75rem', color: '#991b1b', fontWeight: 'bold' },
  explanationContainer: { marginTop: '0.75rem', background: '#f1f5f9', borderLeft: '4px solid #1e3a8a', padding: '0.75rem', borderRadius: '0 4px 4px 0' },
  explanationTitle: { fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e3a8a' },
  explanationText: { lineHeight: '1.5' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  modalContent: { position: 'relative', background: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' },
  closeModal: { position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' },
  glossaryTerm: { marginBottom: '1rem' },
  termTitle: { fontWeight: '600' },
  termDef: { marginTop: '0.25rem' },
  notesModalOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 },
  notesModalContent: { position: 'relative', background: '#fff', padding: '1.5rem', borderRadius: '8px', maxWidth: '400px', width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' },
  closeNotes: { position: 'absolute', top: '0.5rem', right: '0.75rem', background: 'transparent', border: 'none', fontSize: '1.25rem', cursor: 'pointer' },
  notesLabel: { fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' },
  notesTextarea: { width: '100%', minHeight: '100px', borderRadius: '4px', border: '1px solid #ccc', padding: '0.5rem', fontSize: '1rem' },
  notesPopup: {
    position: 'absolute',
    top: 0,
    left: 'calc(100% + 16px)',
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    maxWidth: '350px',
    width: '100%',
    zIndex: 10,
    minHeight: '180px'
  },
  notesPopupArrow: {
    position: 'absolute',
    left: '-16px',
    top: '24px',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderRight: '16px solid #fff',
    filter: 'drop-shadow(-2px 0 2px rgba(0,0,0,0.08))'
  },
  questionCard: { marginBottom: '1.5rem' }
};

function shuffleArray(arr) {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getNoteKey = qid => `compqna_note_${qid}`;
function loadNotes(questions) {
  const notes = {};
  questions.forEach(q => {
    const saved = localStorage.getItem(getNoteKey(q.id));
    if (saved !== null) notes[q.id] = saved;
  });
  return notes;
}

export default function QuizApp() {
  const { quizState: answers, setQuizState: setAnswers, questions, setQuestions } = useContext(QuizContext);
  const [score, setScore] = useState(`0/${initialQuestions.length}`);
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  const [notes, setNotes] = useState(() => loadNotes(initialQuestions));
  const [openNotesQid, setOpenNotesQid] = useState(null);

  useEffect(() => {
    setNotes(loadNotes(questions));
  }, [questions]);

  useEffect(() => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount === questions.length && questions.length > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [answers, questions.length]);

  useEffect(() => {
    const correctCount = questions.reduce(
      (acc, q) =>
        acc +
        (answers[q.id] === q.options.findIndex(o => o.correct) ? 1 : 0),
      0
    );
    setScore(`${correctCount}/${questions.length}`);
  }, [answers, questions]);

  const selectOption = (qId, idx) => {
    if (answers[qId] !== undefined) return;
    setAnswers(prev => {
      const newAns = { ...prev, [qId]: idx };
      const correctCount = questions.reduce((acc, q) => acc + (newAns[q.id] === q.options.findIndex(o => o.correct) ? 1 : 0), 0);
      setScore(`${correctCount}/${initialQuestions.length}`);
      return newAns;
    });
  };

  const handleReset = () => {
    setQuestions(shuffleArray(initialQuestions));
    setAnswers({});
    setScore(`0/${initialQuestions.length}`);
  };

  const toggleGlossary = () => setGlossaryOpen(open => !open);

  const openNotes = qid => setOpenNotesQid(qid);
  const closeNotes = () => setOpenNotesQid(null);
  const handleNoteChange = (qid, value) => {
    setNotes(prev => {
      const updated = { ...prev, [qid]: value };
      localStorage.setItem(getNoteKey(qid), value);
      return updated;
    });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Data Structures & Algorithms Practice</h1>
        <div style={styles.score}>Score: {score}</div>
        <button style={styles.resetBtn} onClick={handleReset}>Reset</button>
        <button style={styles.glossaryBtn} onClick={toggleGlossary}>
          {glossaryOpen ? 'Hide Glossary' : 'Show Glossary'}
        </button>
      </header>
      <div className="section-title" style={styles.sectionTitle}>Multiple Choice</div>
      {questions.map((q, idx) => {
        const userIdx = answers[q.id];
        const correctIdx = q.options.findIndex(o => o.correct);
        const isAnswered = userIdx !== undefined;
        return (
          <div key={q.id} style={styles.cardWrapper}>
            <div className="question-card" style={styles.card}>
              <div style={styles.questionNumber}>Question {idx + 1}</div>
              <div style={styles.questionText}>{q.question}</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <button style={styles.notesBtn} onClick={() => openNotes(q.id)}>
                  {notes[q.id]?.trim() ? 'Edit Notes' : 'Add Notes'}
                </button>
              </div>
              <div style={styles.options}>
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={
                      "option-btn" +
                      (isAnswered && i === correctIdx ? " correct-btn" : "") +
                      (isAnswered && i === userIdx && i !== correctIdx ? " incorrect-btn" : "")
                    }
                    style={styles.optionBtn}
                    onClick={() => selectOption(q.id, i)}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              {isAnswered && (
                <>
                  <div style={answers[q.id] === correctIdx ? styles.summaryCorrect : styles.summaryIncorrect}>
                    {answers[q.id] === correctIdx ? 'Correct.' : 'Incorrect.'}
                  </div>
                  <div className="explanation-box" style={styles.explanationContainer}>
                    <div className="explanation-title" style={styles.explanationTitle}>Explanation</div>
                    <div style={styles.explanationText}>{q.explanation}</div>
                  </div>
                </>
              )}
              {openNotesQid === q.id && (
                <div className="notes-popup" style={styles.notesPopup}>
                  <div style={styles.notesPopupArrow}></div>
                  <button style={styles.closeNotes} onClick={closeNotes}>&times;</button>
                  <label style={styles.notesLabel}>Your Notes for Question {idx + 1}:</label>
                  <textarea
                    style={styles.notesTextarea}
                    value={notes[q.id] || ''}
                    onChange={e => handleNoteChange(q.id, e.target.value)}
                    placeholder="Write your notes here..."
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {glossaryOpen && (
        <div style={styles.modalOverlay} onClick={toggleGlossary}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.closeModal} onClick={toggleGlossary}>&times;</button>
            <h2>Glossary</h2>
            {Object.entries(glossary).map(([term, def]) => (
              <div key={term} style={styles.glossaryTerm}>
                <div style={styles.termTitle}>{term.charAt(0).toUpperCase() + term.slice(1)}</div>
                <div style={styles.termDef}>{def}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
