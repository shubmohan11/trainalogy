import React, { useState } from 'react';
import './BMICalculator.css';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('metric'); // metric or imperial

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }

    let bmiValue;
    
    if (unit === 'metric') {
      // BMI = weight (kg) / (height (m))^2
      const heightInMeters = height / 100;
      bmiValue = weight / (heightInMeters * heightInMeters);
    } else {
      // BMI = (weight (lbs) / (height (inches))^2) * 703
      bmiValue = (weight / (height * height)) * 703;
    }

    setBmi(bmiValue.toFixed(1));
    
    // Determine category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  const getCategoryColor = () => {
    if (category === 'Underweight') return '#3498db';
    if (category === 'Normal weight') return '#2ecc71';
    if (category === 'Overweight') return '#f39c12';
    if (category === 'Obese') return '#e74c3c';
    return '#333';
  };

  return (
    <div className="bmi-calculator-section">
      <div className="container">
        <div className="bmi-header">
          <h2>BMI Calculator</h2>
          <p>Calculate your Body Mass Index to understand your health better</p>
        </div>

        <div className="bmi-content">
          <div className="bmi-calculator-card">
            <div className="unit-toggle">
              <button
                className={unit === 'metric' ? 'active' : ''}
                onClick={() => setUnit('metric')}
              >
                Metric
              </button>
              <button
                className={unit === 'imperial' ? 'active' : ''}
                onClick={() => setUnit('imperial')}
              >
                Imperial
              </button>
            </div>

            <form onSubmit={calculateBMI}>
              <div className="input-group">
                <label htmlFor="weight">
                  Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                  step="0.1"
                  min="0"
                />
              </div>

              <div className="input-group">
                <label htmlFor="height">
                  Height {unit === 'metric' ? '(cm)' : '(inches)'}
                </label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                  step="0.1"
                  min="0"
                />
              </div>

              <div className="button-group">
                <button type="submit" className="calculate-btn">
                  Calculate BMI
                </button>
                <button type="button" className="reset-btn" onClick={resetCalculator}>
                  Reset
                </button>
              </div>
            </form>

            {bmi && (
              <div className="bmi-result" style={{ borderColor: getCategoryColor() }}>
                <h3>Your BMI Result</h3>
                <div className="bmi-value" style={{ color: getCategoryColor() }}>
                  {bmi}
                </div>
                <div className="bmi-category" style={{ color: getCategoryColor() }}>
                  {category}
                </div>
              </div>
            )}
          </div>

          <div className="bmi-info-card">
            <h3>BMI Categories</h3>
            <div className="bmi-ranges">
              <div className="range-item underweight">
                <span className="range-label">Underweight</span>
                <span className="range-value">&lt; 18.5</span>
              </div>
              <div className="range-item normal">
                <span className="range-label">Normal weight</span>
                <span className="range-value">18.5 - 24.9</span>
              </div>
              <div className="range-item overweight">
                <span className="range-label">Overweight</span>
                <span className="range-value">25 - 29.9</span>
              </div>
              <div className="range-item obese">
                <span className="range-label">Obese</span>
                <span className="range-value">≥ 30</span>
              </div>
            </div>

            <div className="bmi-note">
              <p>
                <strong>Note:</strong> BMI is a screening tool and doesn't directly measure body fat or health. 
                Consult with our trainers for a comprehensive fitness assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
