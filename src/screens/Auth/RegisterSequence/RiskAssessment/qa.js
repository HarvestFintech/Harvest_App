const RiskAssessment = [
  {
    q: 'What is your goal for this portfolio?',
    a: [
      'Short term investing',
      'Long term investing',
      'Diversifying',
      'Retirement',
      'Other', // is this option needed? What score does it have?
    ],
  },
  {
    q: 'How long do you plan to hold this investment portfolio?',
    a: [
      'Less than 1 year',
      '1 to 2 years',
      '3 to 4 years',
      '5 to 9 years',
      '10+ years',
    ],
  },
  {
    q: 'What would you do during financial market declines?',
    a: [
      'Sell all of my stock investments',
      'Sell some of my stock investments',
      'Make no changes',
      'Increase some of my stock investments',
      'Increase all of my stock investments',
    ],
  },
  {
    q: 'During stock market declines, I tend to sell stocks and invest in safer investments',
    a: [
      'Strongly disagree',
      'Disagree',
      'Somewhat agree',
      'Agree',
      'Strongly agree',
    ],
  },
  {
    q: 'I prefer stable investments with lower potential returns over volatile investments with higher potential returns',
    a: [
      'Strongly disagree',
      'Disagree',
      'Somewhat agree',
      'Agree',
      'Strongly agree',
    ],
  },
];

export default RiskAssessment;
