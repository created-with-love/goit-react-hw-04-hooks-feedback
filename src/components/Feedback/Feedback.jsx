import React, { Component } from 'react';
import FeedBackOptions from '../FeedbackOptions/FeedBackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

class Feedback extends Component {
  static defaultProps = {
    // задаю дефолтные значения (они задаются до стейта)
    initialValue: 0,
  };
  // Babel, встроеный в реакт транспилирует такой стейт в constructor
  // после изменения любого свойства стейта будет авто-ки запускаться render
  // переданные значение через App.js доступны через this.props.__prop_name__
  state = {
    good: this.props.initialValue,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.floor((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const stateArray = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={stateArray}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default Feedback;
