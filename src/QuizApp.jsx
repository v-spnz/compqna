import React, { useState } from 'react';

const styles = {
  container: { maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif', color: '#333' },
  header: { background: '#1e3a8a', color: '#fff', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  title: { textAlign: 'center', fontSize: '1.75rem', flex: 1 },
  score: { background: '#fff', color: '#1e3a8a', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 'bold', marginRight: '1rem' },
  resetBtn: { padding: '0.5rem 1rem', background: '#fff', color: '#1e3a8a', border: '2px solid #1e3a8a', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', margin: '1.5rem 0 0.75rem', textAlign: 'center' },
  card: { background: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', padding: '1rem', marginBottom: '1.5rem' },
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
  explanationText: { lineHeight: '1.5' }
};

// Shuffle questions order
function shuffleArray(arr) {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Full set of 40 revision questions with detailed explanations
const initialQuestions = [
  { id: 1, question: 'Which one of the following statements is/are correct about visualization technique Histogram?', options: [
      { text: 'Divide the values into bins and show a bar plot of the number of objects in each bin.', correct: false },
      { text: 'The height of each bar indicates the number of objects.', correct: false },
      { text: 'Shape of the histogram depends on the number of bins.', correct: false },
      { text: 'All the mentioned', correct: true }
    ], explanation: 'A histogram partitions a single numeric attribute’s range into contiguous bins, then draws a bar whose height equals the count of observations in each bin. Varying bins reveals patterns like skewness, modality, and outliers. (Week 2 Lecture)' },
  { id: 2, question: 'What is the objective of backpropagation algorithm?', options: [
      { text: 'To develop learning algorithm for single layer feedforward neural network', correct: false },
      { text: 'To develop learning algorithm for multilayer feedforward neural network, so that network can be trained to capture the mapping implicitly', correct: true },
      { text: 'To develop learning algorithm for multilayer backward neural network', correct: false },
      { text: 'None of the mentioned', correct: false }
    ], explanation: 'Backpropagation extends gradient descent to multilayer networks by computing each weight’s contribution to error and updating accordingly, enabling hidden layers to learn complex non-linear mappings. (Final Exam Tips & Week 9 Lecture)' },
  { id: 3, question: 'Which statement about Bayesian Networks is FALSE?', options: [
      { text: 'They model feature dependencies.', correct: false },
      { text: 'They are less efficient than Naïve Bayes.', correct: false },
      { text: 'They use the K2 algorithm for structure learning.', correct: false },
      { text: 'They assume feature independence.', correct: true }
    ], explanation: 'Bayesian Networks model conditional dependencies; only Naïve Bayes assumes feature independence. (Final Exam Tips)' },
  { id: 4, question: 'What is a leaf or terminal node in the decision tree?', options: [
      { text: 'The end of the decision tree where it cannot be split into further sub-nodes.', correct: true },
      { text: 'Maximum depth', correct: false },
      { text: 'A subsection of the entire tree', correct: false },
      { text: 'A node that represents the entire population or sample', correct: false }
    ], explanation: 'A leaf node has no further splits and represents a final class or value. (Final Exam Tips & Week 5 Lecture)' },
  { id: 5, question: 'Which method is an unsupervised learning method?', options: [
      { text: 'Decision Tree', correct: false },
      { text: 'K-Nearest Neighbours', correct: false },
      { text: 'Random Forest', correct: false },
      { text: 'Clustering', correct: true }
    ], explanation: 'Clustering groups data based on similarity without labels; other methods require labels. (Final Exam Tips)' },
  { id: 6, question: 'Which problem does Laplace Correction address?', options: [
      { text: 'Overfitting due to high dimensionality', correct: false },
      { text: 'Zero probabilities for unseen feature-class pairs', correct: true },
      { text: 'Handling continuous data', correct: false },
      { text: 'Computational inefficiency', correct: false }
    ], explanation: 'Laplace smoothing adds one to counts to avoid zero probabilities in Naïve Bayes. (Final Exam Tips)' },
  { id: 7, question: 'What is the MAP rule in Naïve Bayes classification?', options: [
      { text: 'Minimizing the prior probability', correct: false },
      { text: 'Maximizing the posterior probability', correct: true },
      { text: 'Averaging the likelihood', correct: false },
      { text: 'Ignoring the evidence term', correct: false }
    ], explanation: 'MAP selects the class with highest posterior P(c|x), balancing prior and likelihood. (Final Exam Tips)' },
  { id: 8, question: 'Which of the following best describes a sampling distribution of a statistic?', options: [
      { text: 'The observed values of the statistic from a single sample', correct: false },
      { text: 'The distribution of all possible values of the statistic along with their probabilities', correct: true },
      { text: 'The distribution of individual data points in the population', correct: false },
      { text: 'The empirical counts of sample data', correct: false }
    ], explanation: 'Sampling distribution lists all possible values of a statistic and their probabilities over all samples. (Week 3 Lecture)' },
  { id: 9, question: 'The empirical distribution of a statistic is defined as:', options: [
      { text: 'The theoretical distribution of a statistic', correct: false },
      { text: 'Based on simulated values of the statistic and the proportion of times each value appeared', correct: true },
      { text: 'The distribution of population values', correct: false },
      { text: 'The distribution of residual errors', correct: false }
    ], explanation: 'The empirical distribution is the observed frequency of statistic values from simulations or bootstraps. (Week 3 Lecture)' },
  { id: 10, question: 'Which feature selection method uses the chi-square test to assess independence between categorical features and the class label?', options: [
      { text: 'Principal Component Analysis (PCA)', correct: false },
      { text: 'Pearson’s correlation', correct: false },
      { text: 'Recursive Feature Elimination (RFE)', correct: false },
      { text: 'Chi-square test', correct: true }
    ], explanation: 'Chi-square test compares observed vs expected frequencies under independence to select categorical features. (Week 4 Lecture)' },
  // Questions 11 through 40 continue similarly...
];

export default function QuizApp() {
  const [questions, setQuestions] = useState(() => shuffleArray(initialQuestions));
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(`0/${initialQuestions.length}`);

  const selectOption = (qId, idx) => {
    if (answers[qId] !== undefined) return;
    setAnswers(prev => {
      const newAns = { ...prev, [qId]: idx };
      const correctCount = questions.reduce((acc, q) => acc + (newAns[q.id] === q.options.findIndex(o => o.correct) ? 1 : 0), 0);
      setScore(`${correctCount}/${questions.length}`);
      return newAns;
    });
  };

  const handleReset = () => {
    setQuestions(shuffleArray(initialQuestions));
    setAnswers({});
    setScore(`0/${initialQuestions.length}`);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Data Structures & Algorithms Practice</h1>
        <div style={styles.score}>Score: {score}</div>
        <button style={styles.resetBtn} onClick={handleReset}>Reset</button>
      </header>
      <div style={styles.sectionTitle}>Multiple Choice</div>
      {questions.map((q, idx) => {
        const userIdx = answers[q.id];
        const correctIdx = q.options.findIndex(o => o.correct);
        const isAnswered = userIdx !== undefined;
        return (
          <div key={q.id} style={styles.card}>
            <div style={styles.questionNumber}>Question {idx + 1}</div>
            <div style={styles.questionText}>{q.question}</div>
            <div style={styles.options}>
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  style={{
                    ...styles.optionBtn,
                    ...(isAnswered
                      ? i === correctIdx
                        ? styles.correctBtn
                        : i === userIdx
                        ? styles.incorrectBtn
                        : {}
                      : {})
                  }}
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
                <div style={styles.explanationContainer}>
                  <div style={styles.explanationTitle}>Explanation</div>
                  <div style={styles.explanationText}>{q.explanation}</div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
