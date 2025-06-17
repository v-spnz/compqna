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
  },
  {
    title: "What is Backpropagation?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="abacus">🧮</span> What is Backpropagation?
        </h3>
        <p>
          Backpropagation is the learning algorithm used in training neural networks, especially multilayer perceptrons (MLPs). It allows the network to learn from errors by adjusting the weights through the layers in reverse order — from output back to input.
        </p>
        <p>
          It is the mechanism that makes deep learning possible.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> How It Works (taught in COMP615):
        </h3>
        <ul>
          <li><b>Forward Pass:</b> Inputs move through the network to generate a prediction.</li>
          <li><b>Loss Calculation:</b> The difference (error) between prediction and actual output is computed.</li>
          <li><b>Backward Pass:</b> The error is propagated backward using the chain rule of calculus to compute gradients.</li>
          <li><b>Weight Updates:</b> Weights are updated using gradient descent, aiming to minimize the error.</li>
        </ul>
        <p>
          Without backpropagation, only output-layer weights could be trained. With it, hidden layers can learn too.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="chart">📊</span> Core Concepts in Backpropagation
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loss Function</td>
              <td>Measures the model’s prediction error</td>
            </tr>
            <tr>
              <td>Gradient Descent</td>
              <td>Optimization method for minimizing the loss</td>
            </tr>
            <tr>
              <td>Learning Rate (η)</td>
              <td>Controls the size of weight updates</td>
            </tr>
            <tr>
              <td>Epoch</td>
              <td>One full pass over the training data</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Use Backpropagation?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            "It’s how neural networks learn hidden patterns by adjusting all their weights—not just the last layer."
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 9, ANN Lecture</span>
        </p>
        <p>It’s especially important when:</p>
        <ul>
          <li>The network has hidden layers</li>
          <li>You need to learn nonlinear relationships</li>
          <li>The task requires high accuracy on complex data</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Sampling Distribution?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="chart">📈</span> What is a Sampling Distribution?
        </h3>
        <p>
          A sampling distribution is the probability distribution of a statistic (e.g., mean, proportion, median) calculated from repeated samples drawn from the same population.
        </p>
        <p>
          Rather than showing data values, it shows how a statistic varies across different random samples. This concept is central to statistical inference.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="microscope">🔬</span> Why It Matters in COMP615:
        </h3>
        <ul>
          <li>Understand the variability of sample statistics</li>
          <li>Construct confidence intervals</li>
          <li>Perform hypothesis testing</li>
          <li>Evaluate model performance via resampling techniques (e.g., bootstrap)</li>
        </ul>
        <p>
          Without this concept, we couldn’t reliably generalize from one sample to the population.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Key Properties of Sampling Distributions
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Statistic</td>
              <td>A numerical measure (e.g., sample mean) computed from sample data</td>
            </tr>
            <tr>
              <td>Sampling Distribution</td>
              <td>The distribution of that statistic across many samples</td>
            </tr>
            <tr>
              <td>Standard Error</td>
              <td>Standard deviation of the sampling distribution (shows variability)</td>
            </tr>
            <tr>
              <td>Central Limit Theorem</td>
              <td>For large enough samples, the sampling distribution of the mean is ~normal</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Why Use Sampling Distributions?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            "They allow us to quantify uncertainty in estimates and judge how likely a result is by chance."
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 3 Lecture: Sampling & Empirical Distributions</span>
        </p>
        <p>This becomes especially useful when:</p>
        <ul>
          <li>The population is unknown or too large to fully observe</li>
          <li>You want to estimate parameters (like the mean) using limited data</li>
          <li>You’re validating model accuracy using bootstrap or cross-validation</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Laplace Correction?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="test tube">🧪</span> What is Laplace Correction?
        </h3>
        <p>
          Laplace Correction, also known as Laplace Smoothing or add-one smoothing, is a technique used to handle the problem of zero probabilities in probabilistic models like Naïve Bayes.
        </p>
        <p>
          Without it, if a feature value hasn’t been seen in training for a class, the model assigns it a probability of zero — which can completely invalidate the product of probabilities in Naïve Bayes.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Why It’s Needed in COMP615:
        </h3>
        <ul>
          <li>In Naïve Bayes: We multiply conditional probabilities of features given a class.</li>
          <li>If any one of these is zero, the entire probability becomes zero.</li>
          <li>Laplace correction adds 1 to all frequency counts, ensuring that:</li>
          <ul>
            <li>No probability is ever exactly zero</li>
            <li>Unseen values still have small, but non-zero, probability</li>
          </ul>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Laplace Correction Formula (Simplified)
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Without Correction</th>
              <th>With Laplace Correction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P(feature | class) = count / total</td>
              <td>P(feature | class) = (count + 1) / (total + k)</td>
            </tr>
            <tr>
              <td colSpan={2} style={{ fontSize: '0.95em', color: '#64748b' }}>
                Where k = number of possible values that the feature can take (e.g., for binary, k = 2)
              </td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Use Laplace Correction?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            "It prevents the model from collapsing due to unseen feature combinations."
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 7: Naïve Bayes Classification</span>
        </p>
        <p>It’s especially important when:</p>
        <ul>
          <li>Your dataset is small or sparse</li>
          <li>Some features have rare values</li>
          <li>You're working on text classification (where word absence is common)</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Chi-Square Feature Selection?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="abacus">🧮</span> What is Chi-Square Feature Selection?
        </h3>
        <p>
          Chi-Square Feature Selection is a filter method used to evaluate the relationship between categorical features and a class label.
        </p>
        <p>
          It tests whether a feature and the target variable are statistically independent. If they are not independent, the feature is considered informative and useful for prediction.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="magnifying glass">🔍</span> How It’s Used in COMP615:
        </h3>
        <ul>
          <li>In classification tasks with categorical input features, we want to know:</li>
          <li style={{ marginLeft: '1.5rem', fontStyle: 'italic' }}>
            “Does knowing the value of this feature give us information about the class?”
          </li>
          <li>Chi-square answers this by comparing:</li>
          <ul>
            <li>Observed frequencies (from your dataset)</li>
            <li>Expected frequencies (if there were no relationship between the feature and class)</li>
          </ul>
          <li>A large Chi-square value means there is a strong association.</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Core Terms in Chi-Square Test
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Observed Counts</td>
              <td>How often each feature-class pair actually occurs</td>
            </tr>
            <tr>
              <td>Expected Counts</td>
              <td>How often they would occur if there were no association</td>
            </tr>
            <tr>
              <td>Chi-Square Score</td>
              <td>Measures the difference between observed and expected frequencies</td>
            </tr>
            <tr>
              <td>p-value</td>
              <td>Shows whether the observed difference is statistically significant</td>
            </tr>
          </tbody>
        </table>
        <p>Only features with high Chi-square scores (and low p-values) are selected.</p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Use Chi-Square for Feature Selection?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            "It identifies which categorical features are truly informative by measuring class dependency."
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 4: Feature Selection Methods</span>
        </p>
        <p>It’s especially useful when:</p>
        <ul>
          <li>Your features are categorical</li>
          <li>You want to reduce dimensionality before training</li>
          <li>You’re building interpretable models (e.g., Decision Trees)</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Principal Component Analysis (PCA)?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="triangular ruler">📐</span> What is Principal Component Analysis (PCA)?
        </h3>
        <p>
          Principal Component Analysis (PCA) is a feature extraction technique used to reduce the number of variables in a dataset while retaining most of the original variance (information).
        </p>
        <p>
          Rather than selecting features (like in feature selection), PCA creates new features by linearly combining the original ones. These new features are called principal components.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> How It’s Used in COMP615:
        </h3>
        <ul>
          <li>PCA is especially useful when:</li>
          <ul>
            <li>You have many correlated numeric features</li>
            <li>You want to reduce dimensionality for visualization or model performance</li>
            <li>You want to avoid multicollinearity in regression or classification</li>
          </ul>
          <li>Each principal component:</li>
          <ul>
            <li>Is a linear combination of the original features</li>
            <li>Is orthogonal to the others (no correlation)</li>
            <li>Explains a portion of the dataset’s total variance</li>
          </ul>
          <li>The first component captures the most variance, the second the next most, and so on.</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Key Concepts in PCA
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eigenvectors</td>
              <td>Directions (axes) along which data has the most variance</td>
            </tr>
            <tr>
              <td>Eigenvalues</td>
              <td>Amount of variance captured by each principal component</td>
            </tr>
            <tr>
              <td>Dimensionality Reduction</td>
              <td>Select top-k components that explain the majority of the variance</td>
            </tr>
            <tr>
              <td>Scree Plot</td>
              <td>Visual tool to decide how many components to keep</td>
            </tr>
          </tbody>
        </table>
        <p>PCA is unsupervised and doesn’t consider class labels — it’s based only on data spread.</p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Use PCA?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “It helps simplify datasets while keeping as much structure as possible — a key trade-off between complexity and information.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 4: Feature Engineering & Dimensionality Reduction</span>
        </p>
        <p>Best used when:</p>
        <ul>
          <li>Your dataset has many numeric columns</li>
          <li>You want to visualize high-dimensional data</li>
          <li>Your model suffers from overfitting due to many features</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is the Bias–Variance Tradeoff?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="scales">⚖️</span> What is the Bias–Variance Tradeoff?
        </h3>
        <p>
          The bias–variance tradeoff is a foundational concept in machine learning that explains the balance between two types of model error:
        </p>
        <ul>
          <li><b>Bias:</b> Error due to overly simplistic assumptions in the learning algorithm</li>
          <li><b>Variance:</b> Error due to too much sensitivity to the training data</li>
        </ul>
        <p>
          A well-performing model must strike the right balance — low enough bias to learn meaningful patterns, but low enough variance to generalize well to new data.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="magnifying glass">🔍</span> How It’s Used in COMP615:
        </h3>
        <p>
          <span style={{ fontStyle: 'italic' }}>
            "High bias → underfitting. High variance → overfitting."
          </span>
        </p>
        <p>
          You need to monitor training vs validation accuracy to detect where your model falls on this spectrum:
        </p>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Model Behavior</th>
              <th>High Bias</th>
              <th>High Variance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Training Accuracy</td>
              <td>Low</td>
              <td>Very high</td>
            </tr>
            <tr>
              <td>Validation Accuracy</td>
              <td>Low</td>
              <td>Much lower than training</td>
            </tr>
            <tr>
              <td>Common in</td>
              <td>Linear models, shallow trees</td>
              <td>Deep trees, large neural networks</td>
            </tr>
            <tr>
              <td>Fix With</td>
              <td>More features, more complex model</td>
              <td>Regularization, more data, bagging</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Where Bias & Variance Come From
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Error Component</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bias</td>
              <td>Comes from flawed assumptions or under-complex models</td>
            </tr>
            <tr>
              <td>Variance</td>
              <td>Comes from the model adapting too closely to training data</td>
            </tr>
            <tr>
              <td>Irreducible Error</td>
              <td>Noise in the data that no model can remove</td>
            </tr>
          </tbody>
        </table>
        <p>
          Bagging and ensemble methods (Week 11) reduce variance. Simpler models tend to reduce bias but may miss patterns.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why It Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “Understanding the tradeoff helps you choose models and tuning strategies that generalize well.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 11: Ensemble Learning</span>
        </p>
        <p>This concept drives:</p>
        <ul>
          <li>Model diagnostics (via learning curves)</li>
          <li>Decisions about regularization</li>
          <li>Ensemble strategies like bagging (reduce variance) or boosting (reduce bias)</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Cross-Validation?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="repeat">🔁</span> What is Cross-Validation?
        </h3>
        <p>
          Cross-validation is a model evaluation technique used to assess how well a model generalizes to unseen data. It’s a smarter alternative to a single train/test split, especially when your dataset is limited.
        </p>
        <p>
          It works by splitting the data into multiple folds and rotating which part is used for training and which for testing — giving a more reliable estimate of model performance.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="magnifying glass">🔍</span> Main Types of Cross-Validation (in COMP615)
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>k-Fold</td>
              <td>Split data into k parts (“folds”), train on k–1, test on the 1 left out.</td>
            </tr>
            <tr>
              <td>Leave-One-Out (LOO)</td>
              <td>A special case of k-fold where k = n (one fold per example).</td>
            </tr>
            <tr>
              <td>Repeated Holdout</td>
              <td>Randomly split train/test multiple times and average results.</td>
            </tr>
            <tr>
              <td>Bootstrap</td>
              <td>Sample with replacement, train on samples, test on unsampled instances.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Each method offers a way to average performance across multiple splits to reduce bias or variance in evaluation.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Why k-Fold is Preferred
        </h3>
        <ul>
          <li>Gives a more stable performance estimate</li>
          <li>Makes better use of data than simple holdout</li>
          <li>Helps detect overfitting (if training and test scores differ a lot)</li>
        </ul>
        <p>
          In COMP615, k = 5 or 10 is commonly used, depending on dataset size.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Use Cross-Validation?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “It helps avoid misleading performance results from a single random split.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 6: Model Evaluation</span>
        </p>
        <p>It’s essential when:</p>
        <ul>
          <li>You have limited data</li>
          <li>You’re comparing different models</li>
          <li>You’re tuning hyperparameters or selecting features</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is the MAP Rule in Naïve Bayes?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> What is the MAP Rule in Naïve Bayes?
        </h3>
        <p>
          In Naïve Bayes classification, the <b>Maximum A Posteriori (MAP) rule</b> is used to select the most likely class for a given input based on Bayes’ Theorem.
        </p>
        <p>
          Rather than calculating raw probabilities, it compares relative likelihoods to pick the class with the highest posterior probability.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Bayes' Theorem Recap
        </h3>
        <p>
          For a class <b>C</b> and feature vector <b>X</b>:
        </p>
        <pre style={{ background: 'none', color: '#a5b4fc', fontSize: '1.1em', margin: '0.5em 0' }}>
          P(C|X) = [P(X|C) ⋅ P(C)] / P(X)
        </pre>
        <p>
          Since <b>P(X)</b> is constant across all classes, we ignore it during comparison:
        </p>
        <pre style={{ background: 'none', color: '#a5b4fc', fontSize: '1.1em', margin: '0.5em 0' }}>
          MAP estimate:  Ĉ = argmax₍C₎ [P(X|C) ⋅ P(C)]
        </pre>
        <ul>
          <li><b>P(C)</b> is the prior probability (how common the class is overall)</li>
          <li><b>P(X|C)</b> is the likelihood (how likely these features are for that class)</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="package">📦</span> Naïve Bayes Assumption
        </h3>
        <p>
          Naïve Bayes assumes conditional independence between features:
        </p>
        <pre style={{ background: 'none', color: '#a5b4fc', fontSize: '1.1em', margin: '0.5em 0' }}>
          P(X|C) = P(x₁|C) ⋅ P(x₂|C) ⋯ P(xₙ|C)
        </pre>
        <p>
          This makes it fast and scalable, even for high-dimensional data like text.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why MAP Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “MAP gives us a principled way to choose the best class, balancing prior class frequency and feature evidence.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 7: Naïve Bayes Classification</span>
        </p>
        <p>You’ll use the MAP rule:</p>
        <ul>
          <li>To make predictions in Naïve Bayes</li>
          <li>To rank candidate classes</li>
          <li>In situations where classes are imbalanced</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is K-Nearest Neighbours (KNN)?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="round pushpin">📍</span> What is K-Nearest Neighbours (KNN)?
        </h3>
        <p>
          K-Nearest Neighbours (KNN) is a simple, yet powerful lazy learning algorithm used for classification and regression. It makes predictions based on the <b>k</b> most similar training examples to a new, unseen data point.
        </p>
        <p>
          It’s called lazy because it doesn’t build a model during training — it simply stores the data and performs computation only when a prediction is requested.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="magnifying glass">🔍</span> How KNN Works in COMP615:
        </h3>
        <ul>
          <li>Choose <b>k</b> — the number of neighbors to consider.</li>
          <li>Compute distance between the test point and all training examples (e.g., using Euclidean or Hamming distance).</li>
          <li>Sort and select the top-k closest neighbors.</li>
          <li>Vote or average:
            <ul>
              <li><b>Classification:</b> Use majority vote.</li>
              <li><b>Regression:</b> Use the mean of neighbors’ values.</li>
            </ul>
          </li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="straight ruler">📏</span> Distance Metrics in KNN
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Use Case</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Euclidean</td>
              <td>Numeric features</td>
              <td>Default for continuous variables</td>
            </tr>
            <tr>
              <td>Manhattan</td>
              <td>Grid-like data or sparse inputs</td>
              <td>Sum of absolute differences</td>
            </tr>
            <tr>
              <td>Hamming</td>
              <td>Categorical/binary features</td>
              <td>Measures number of mismatches</td>
            </tr>
          </tbody>
        </table>
        <p>
          Distance directly affects which neighbors are chosen, so feature scaling (e.g., normalization) is often needed.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why KNN Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “KNN lets you classify without training — just use the structure of your data.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 8: KNN & Similarity</span>
        </p>
        <p>It’s best when:</p>
        <ul>
          <li>You want a transparent model with few assumptions</li>
          <li>You have balanced data and meaningful distance metrics</li>
          <li>You need a quick baseline model for comparison</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is an Activation Function in Neural Networks?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="gear">⚙️</span> What is an Activation Function in Neural Networks?
        </h3>
        <p>
          An activation function is a mathematical operation applied to the output of a neuron. It introduces non-linearity into the network, enabling it to learn complex patterns and decision boundaries.
        </p>
        <p>
          Without activation functions, a neural network — no matter how many layers — would behave like a single-layer linear model.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Why It’s Essential in COMP615:
        </h3>
        <ul>
          <li>Each neuron in a neural network:</li>
          <ul>
            <li>Calculates a weighted sum of its inputs</li>
            <li>Applies an activation function to that sum</li>
            <li>Passes the result to the next layer</li>
          </ul>
          <li>
            Activation functions determine how signals flow through the network and whether the network can learn non-linear relationships in the data.
          </li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Common Activation Functions (taught in COMP615)
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Output Range</th>
              <th>Common Use</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sigmoid</td>
              <td>(0, 1)</td>
              <td>Binary classification</td>
              <td>Can suffer from vanishing gradients</td>
            </tr>
            <tr>
              <td>Tanh</td>
              <td>(–1, 1)</td>
              <td>Hidden layers (older models)</td>
              <td>Centered at zero, better than sigmoid</td>
            </tr>
            <tr>
              <td>ReLU</td>
              <td>[0, ∞)</td>
              <td>Modern deep networks</td>
              <td>Fast, sparse, may die if gradients hit 0</td>
            </tr>
            <tr>
              <td>Softmax</td>
              <td>[0, 1] (sums to 1)</td>
              <td>Output layer (multi-class)</td>
              <td>Converts outputs into class probabilities</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Activation Functions Matter?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “They’re the reason neural nets can classify cats and dogs, not just draw straight lines.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 9: Artificial Neural Networks</span>
        </p>
        <p>Use activation functions when:</p>
        <ul>
          <li>You need to break linearity</li>
          <li>You want to control signal strength</li>
          <li>You're training a model on non-trivial patterns (e.g., images, text, complex tabular data)</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Overfitting and How Do We Prevent It?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> What is Overfitting and How Do We Prevent It?
        </h3>
        <p>
          Overfitting happens when a model learns the training data too well — including its noise, quirks, or outliers — and fails to generalize to new, unseen data.
        </p>
        <p>
          It’s like memorizing practice questions instead of learning how to solve problems: great for training accuracy, terrible for test performance.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="test tube">🧪</span> Signs of Overfitting in COMP615:
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Behavior in Overfitting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Training Accuracy</td>
              <td>Very high</td>
            </tr>
            <tr>
              <td>Validation/Test Accuracy</td>
              <td>Much lower than training</td>
            </tr>
            <tr>
              <td>Learning Curve Gap</td>
              <td>Large gap between training and validation</td>
            </tr>
            <tr>
              <td>Generalization</td>
              <td>Poor</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#e11d48', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="shield">🛡️</span> Regularization: Your Defense Against Overfitting
        </h3>
        <p>
          Regularization is a set of techniques to control model complexity and improve generalization:
        </p>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>How It Helps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>L1 (Lasso)</td>
              <td>Shrinks some weights to 0 → performs feature selection</td>
            </tr>
            <tr>
              <td>L2 (Ridge)</td>
              <td>Penalizes large weights → smooths model</td>
            </tr>
            <tr>
              <td>Dropout</td>
              <td>Randomly deactivates neurons during training</td>
            </tr>
            <tr>
              <td>Early Stopping</td>
              <td>Stops training when validation performance worsens</td>
            </tr>
            <tr>
              <td>Pruning (Trees)</td>
              <td>Removes low-impact branches</td>
            </tr>
          </tbody>
        </table>
        <p>
          In neural networks, adding too many hidden neurons without regularization can lead to serious overfitting.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why It Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “A perfect training score doesn’t mean your model is good — it might just be memorizing.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Weeks 6 & 9: Evaluation + Neural Networks</span>
        </p>
        <p>You’ll apply this knowledge when:</p>
        <ul>
          <li>Tuning neural networks or decision trees</li>
          <li>Comparing model learning curves</li>
          <li>Deciding between complexity and generalization</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Feature Selection?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="test tube">🧪</span> What is Feature Selection?
        </h3>
        <p>
          Feature Selection is the process of identifying and retaining the most relevant features (variables) in your dataset, while removing those that are redundant or irrelevant.
        </p>
        <p>
          It improves model performance by:
        </p>
        <ul>
          <li>Reducing overfitting</li>
          <li>Lowering training time</li>
          <li>Improving interpretability</li>
          <li>Helping the model focus on the signal, not the noise</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Main Feature Selection Methods (in COMP615)
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Examples Used in Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Filter</td>
              <td>Use statistical tests independent of the model</td>
              <td>Chi-Square, ANOVA F-test, Pearson’s r</td>
            </tr>
            <tr>
              <td>Wrapper</td>
              <td>Select features based on model performance (requires training)</td>
              <td>Forward Selection, Backward Elimination</td>
            </tr>
            <tr>
              <td>Embedded</td>
              <td>Feature selection happens during model training itself</td>
              <td>Lasso (L1), Decision Tree Importance</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> When to Use Each Type
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>You Want To...</th>
              <th>Use This Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quickly reduce dimensionality</td>
              <td>Filter</td>
            </tr>
            <tr>
              <td>Find the best subset tailored to a model</td>
              <td>Wrapper</td>
            </tr>
            <tr>
              <td>Optimize selection while training a model</td>
              <td>Embedded</td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>❗ Note:</b> Feature selection is different from feature extraction (e.g., PCA), which transforms or creates new features.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why It Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “A good model starts with good features — and often fewer is better.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 4: Feature Engineering</span>
        </p>
        <p>You’ll use feature selection when:</p>
        <ul>
          <li>Working with high-dimensional datasets</li>
          <li>Trying to reduce training time</li>
          <li>Simplifying models without sacrificing accuracy</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is a Learning Curve?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="chart decreasing">📉</span> What is a Learning Curve?
        </h3>
        <p>
          A learning curve is a diagnostic tool that plots a model’s performance against the amount of training data used.
        </p>
        <p>
          It helps you visually understand how well your model is learning and whether problems are caused by underfitting, overfitting, or insufficient data.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> How Learning Curves Are Used in COMP615
        </h3>
        <ul>
          <li><b>Training Score Curve:</b> Performance on data the model was trained on</li>
          <li><b>Validation/Test Score Curve:</b> Performance on unseen data</li>
        </ul>
        <p>These curves shift as training data increases:</p>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Curve Behavior</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Both low, no gap</td>
              <td>Underfitting (high bias)</td>
            </tr>
            <tr>
              <td>Training high, validation low</td>
              <td>Overfitting (high variance)</td>
            </tr>
            <tr>
              <td>Both converge at high accuracy</td>
              <td>Good generalization</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="magnifying glass">🔍</span> How to Use Learning Curves
        </h3>
        <ul>
          <li>Early analysis: Check if collecting more data will help</li>
          <li>Model selection: Compare models for bias/variance balance</li>
          <li>Hyperparameter tuning: See effect of complexity (e.g., tree depth, regularization)</li>
        </ul>
        <p>
          Learning curves are especially useful when debugging poor validation scores.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Learning Curves Matter in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “They show you not just how good your model is — but why it performs that way.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 6: Model Evaluation Strategies</span>
        </p>
        <p>You’ll encounter them when:</p>
        <ul>
          <li>Comparing underfit vs. overfit models</li>
          <li>Evaluating ensemble methods</li>
          <li>Deciding between gathering more data or changing the model</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is Bootstrap Sampling?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="repeat">🔁</span> What is Bootstrap Sampling?
        </h3>
        <p>
          Bootstrap Sampling is a statistical resampling technique used to estimate the variability of a statistic (like the mean, accuracy, or error) by generating many samples from one dataset — using sampling with replacement.
        </p>
        <p>
          It’s a foundation for techniques like bagging, model evaluation, and confidence interval estimation.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> How It Works in COMP615
        </h3>
        <ul>
          <li>Take many random samples with replacement from your training set.</li>
          <li>Each sample is the same size as the original dataset but may repeat records.</li>
          <li>Train your model on each sample.</li>
          <li>Evaluate model performance (e.g., accuracy) across all samples.</li>
          <li>Aggregate results to estimate average performance and confidence intervals.</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Key Terms
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sampling With Replacement</td>
              <td>Items can be selected multiple times</td>
            </tr>
            <tr>
              <td>Out-of-Bag (OOB) Error</td>
              <td>Performance on instances not included in a sample</td>
            </tr>
            <tr>
              <td>Variance Estimation</td>
              <td>Measures how much a model’s predictions might vary</td>
            </tr>
            <tr>
              <td>Bagging</td>
              <td>Ensemble method that relies on bootstrap to build many models</td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>💡 In bagging, each model is trained on a bootstrap sample, and predictions are averaged or voted.</b>
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Bootstrap Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “It’s how we simulate getting new data — without actually collecting more.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 6 & Week 11: Model Evaluation + Ensemble Learning</span>
        </p>
        <p>Bootstrap is most useful when:</p>
        <ul>
          <li>You want to estimate model performance with limited data</li>
          <li>You’re using ensemble methods like bagging or random forests</li>
          <li>You need robust statistics from a single dataset</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is a Confusion Matrix?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="abacus">🧮</span> What is a Confusion Matrix?
        </h3>
        <p>
          A confusion matrix is a performance summary for classification models. It shows how many predictions were correct and incorrect by comparing actual and predicted classes.
        </p>
        <p>
          It breaks results down into four categories — especially useful for binary classification.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Confusion Matrix Structure (Binary Case)
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th></th>
              <th>Predicted Positive</th>
              <th>Predicted Negative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Actual Positive</b></td>
              <td>True Positive (TP)</td>
              <td>False Negative (FN)</td>
            </tr>
            <tr>
              <td><b>Actual Negative</b></td>
              <td>False Positive (FP)</td>
              <td>True Negative (TN)</td>
            </tr>
          </tbody>
        </table>
        <p>From this matrix, we derive various evaluation metrics.</p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="triangular ruler">📐</span> Key Metrics in COMP615
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Formula</th>
              <th>What It Tells You</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accuracy</td>
              <td>(TP + TN) / Total</td>
              <td>Overall correctness</td>
            </tr>
            <tr>
              <td>Precision</td>
              <td>TP / (TP + FP)</td>
              <td>Of predicted positives, how many are real</td>
            </tr>
            <tr>
              <td>Recall</td>
              <td>TP / (TP + FN)</td>
              <td>Of actual positives, how many were caught</td>
            </tr>
            <tr>
              <td>F1 Score</td>
              <td>2 × (Precision × Recall) / (P + R)</td>
              <td>Harmonic mean of precision and recall</td>
            </tr>
            <tr>
              <td>Specificity</td>
              <td>TN / (TN + FP)</td>
              <td>How well negatives are identified</td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>⚠️ Accuracy can be misleading if classes are imbalanced — F1 score or recall may be more appropriate.</b>
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why Confusion Matrices Matter in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “Metrics like precision and recall give a clearer picture than accuracy alone.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 6: Model Evaluation & Imbalanced Data</span>
        </p>
        <p>You’ll use these when:</p>
        <ul>
          <li>Comparing classification models</li>
          <li>Evaluating models on imbalanced datasets (e.g., fraud detection)</li>
          <li>Deciding which error (false positive vs false negative) matters more</li>
        </ul>
      </div>
    )
  },
  {
    title: "How Do Decision Trees Choose Splits?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="deciduous tree">🌳</span> How Do Decision Trees Choose Splits?
        </h3>
        <p>
          Decision Trees classify data by recursively splitting it based on feature values. The goal at each step is to pick the feature that best separates the data into pure groups — ideally with just one class in each group.
        </p>
        <p>
          This is done using splitting criteria like Information Gain or Gini Index.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Splitting Criteria in COMP615
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Criterion</th>
              <th>Measures</th>
              <th>Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Information Gain</td>
              <td>Reduction in entropy (uncertainty)</td>
              <td>Choose feature that reduces entropy most</td>
            </tr>
            <tr>
              <td>Gini Index</td>
              <td>Probability of misclassifying a random sample</td>
              <td>Lower Gini means higher purity</td>
            </tr>
            <tr>
              <td>Gain Ratio</td>
              <td>Adjusted Info Gain to prevent bias toward many-valued features</td>
              <td>Balances split quality with fairness</td>
            </tr>
          </tbody>
        </table>
        <p>
          Entropy and Gini are both measures of impurity — lower values mean better splits.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="bar chart">📊</span> Information Gain Formula (used in ID3)
        </h3>
        <pre style={{ background: 'none', color: '#a5b4fc', fontSize: '1.1em', margin: '0.5em 0' }}>
          IG(S, A) = Entropy(S) − ∑ (|Sᵥ| / |S| ⋅ Entropy(Sᵥ))
        </pre>
        <p>
          Where:<br />
          <b>S</b> is the current dataset<br />
          <b>A</b> is a feature<br />
          <b>Sᵥ</b> is the subset for each value of <b>A</b>
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why It Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “The best split is the one that gives us the purest child nodes — the lowest uncertainty.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 5: Decision Tree Induction</span>
        </p>
        <p>You’ll use these when:</p>
        <ul>
          <li>Building trees using ID3, CART, or similar algorithms</li>
          <li>Understanding how trees grow and why they overfit</li>
          <li>Applying pruning and split evaluation in real datasets</li>
        </ul>
      </div>
    )
  },
  {
    title: "What Are the Core Probability Rules?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="game die">🎲</span> What Are the Core Probability Rules?
        </h3>
        <p>
          Probability rules are essential for reasoning under uncertainty — whether you're predicting class labels with Naïve Bayes or estimating event likelihoods in data analysis.
        </p>
        <p>
          COMP615 introduces three fundamental rules: Addition, Multiplication, and Complement.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="triangular ruler">📐</span> Probability Rules (Taught in Week 1 & 7)
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Rule Type</th>
              <th>Formula</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Addition Rule</td>
                                                     <td>
                P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
              </td>
              <td>For the probability of A or B occurring</td>
            </tr>
            <tr>
              <td>Multiplication Rule</td>
              <td>
                P(A ∩ B) = P(A) × P(B | A)
              </td>
              <td>For the probability of A and B both happening</td>
            </tr>
            <tr>
              <td>Complement Rule</td>
              <td>
                P(not A) = 1 − P(A)
              </td>
              <td>For the probability of A not happening</td>
            </tr>
          </tbody>
        </table>
        <p>
          These rules are used when calculating joint, conditional, and marginal probabilities.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> Key Concepts in COMP615 Context
        </h3>
        <ul>
          <li>
            <b>Independence:</b> If A and B are independent, then P(A ∩ B) = P(A) × P(B)
          </li>
          <li>
            <b>Mutual Exclusivity:</b> If A and B cannot happen together, then P(A ∩ B) = 0
          </li>
          <li>
            <b>Bayes’ Theorem:</b> Builds directly from the multiplication rule:
            <pre style={{ background: 'none', color: '#a5b4fc', fontSize: '1.1em', margin: '0.5em 0' }}>
              P(A|B) = [P(B|A) × P(A)] / P(B)
            </pre>
          </li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why It Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “Every model you build — from Naïve Bayes to Neural Nets — relies on these foundations.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 1: Introduction to Probability</span>
        </p>
        <p>You’ll apply these rules when:</p>
        <ul>
          <li>Calculating class probabilities in Naïve Bayes</li>
          <li>Reasoning about uncertainty and inference</li>
          <li>Interpreting evaluation metrics and statistical models</li>
        </ul>
      </div>
    )
  },
  {
    title: "What is the Curse of Dimensionality?",
    content: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="compass">🧭</span> What is the Curse of Dimensionality?
        </h3>
        <p>
          The Curse of Dimensionality refers to the set of problems that arise when working with high-dimensional data — that is, data with many features.
        </p>
        <p>
          As dimensionality increases:
        </p>
        <ul>
          <li>Data becomes sparse</li>
          <li>Distance metrics lose meaning</li>
          <li>Computational cost skyrockets</li>
          <li>Models struggle to generalize well</li>
        </ul>
        <p>
          It’s called a “curse” because even though more features seem helpful, they often make learning harder.
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="brain">🧠</span> What Happens as Dimensions Increase?
        </h3>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Phenomenon</th>
              <th>Why It’s a Problem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Distance becomes uniform</td>
              <td>All points appear equally far from each other</td>
            </tr>
            <tr>
              <td>Overfitting risk increases</td>
              <td>More features = more chances to learn noise</td>
            </tr>
            <tr>
              <td>Model complexity explodes</td>
              <td>Harder to visualize, compute, or train</td>
            </tr>
            <tr>
              <td>More data needed</td>
              <td>Exponentially more samples required for good coverage</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="straight ruler">📏</span> Implications for Distance-Based Models
        </h3>
        <p>
          In models like KNN, distance becomes unreliable in high dimensions because:
        </p>
        <ul>
          <li>Nearest and farthest neighbors become almost equally distant</li>
          <li>Decision boundaries become less clear</li>
          <li>You may need to reduce dimensions first (e.g., with PCA)</li>
        </ul>
        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="puzzle">🧩</span> Why It Matters in COMP615?
        </h3>
        <p>
          <span className="notes-quote" style={{ color: '#64748b', fontStyle: 'italic' }}>
            “More features aren’t always better — they can drown out the signal.”
          </span>
          <br />
          <span style={{ color: '#64748b', fontSize: '0.95em' }}>— Week 4: Feature Engineering & Week 8: KNN</span>
        </p>
        <p>You’ll deal with this when:</p>
        <ul>
          <li>Choosing features for distance-based models</li>
          <li>Applying dimensionality reduction (e.g., PCA)</li>
          <li>Detecting overfitting caused by excessive feature count</li>
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