import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import axios from 'axios';

import {ScreenContainer, ButtonPrimary, ButtonClear, Text} from '@shared';

import riskAssessment from './qa';

import {API_URL} from '@env';

const RiskAssessment = ({navigation}) => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(0);
  const [answers, setAnswers] = useState([]);
  const buttons = riskAssessment;

  const handleNext = () => {
    setSelected(0);
    setPage(page + 1);
  };
  const handlePrev = () => {
    answers.splice(-1, 1);
    setAnswers(answers);
    setPage(page - 1);
  };

  const handleFinish = () => {
    //   TODO:AJ create call to backend and add answers to DB

    answers[page] = selected;
    setAnswers(answers);

    if (page < 2) {
      handleNext();
    } else {
      const {
        data: {status, payload},
        data,
      } = axios.post(`${API_URL}/auth/login`, {
        answers,
      });

      if (status === 200 && payload.token) {
        //   Navigate to suggested baskets if register request was successful
        navigation.navigate('SuggestedBaskets');
      }
    }
  };

  return (
    <ScreenContainer centerX logo>
      <Text h4 style={[styles.text, styles.title]}>
        {buttons[page].q}
      </Text>
      <View style={styles.assessmentForm}>
        <ButtonGroup
          vertical={true}
          textStyle={styles.buttonText}
          buttonStyle={styles.button}
          selectedButtonStyle={styles.buttonSelected}
          containerStyle={styles.container}
          buttonContainerStyle={styles.buttonContainer}
          onPress={value => setSelected(value)}
          selectedIndex={selected}
          buttons={buttons[page].a}
        />
        <View style={styles.navButtons}>
          {page > 0 && (
            <ButtonClear title="Back" onPress={() => handlePrev()} />
          )}
          <ButtonPrimary
            title={page == 2 ? 'Finish' : 'Next'}
            onPress={() => handleFinish(answers)}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default RiskAssessment;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    minHeight: 300,
  },
  buttonContainer: {
    borderBottomWidth: 0,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#DBD8FD80',
    borderRadius: 6,
    minWidth: 300,
  },
  buttonSelected: {
    backgroundColor: '#F0750A',
  },
  assessmentForm: {},
  navButtons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
