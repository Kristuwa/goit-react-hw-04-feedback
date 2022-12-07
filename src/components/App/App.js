import { useState } from 'react';
import Container from './App.styled.js';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert('This value is not defined');
    }
  };

  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total === 0 ? 0 : Number(((good / total) * 100).toFixed(0));
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onIncrement={onIncrement} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
