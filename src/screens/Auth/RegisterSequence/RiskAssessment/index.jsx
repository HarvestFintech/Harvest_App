import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import { useSelector } from 'react-redux';

import axios from 'axios';

import {ScreenContainer, ButtonPrimary, ButtonClear, Text} from '@shared';

import riskAssessment from './qa';

import {API_URL} from '@env';

const RiskAssessment = ({navigation}) => {
  const { token } = useSelector(obj => obj.userInfo);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(0);
  const [answers, setAnswers] = useState([]);
  // const buttons = riskAssessment;

  const [buttons, setButtons] = useState([]);
  const [qids, setQids] = useState([]);

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
      } = axios.post(`${API_URL}/user/onboard/initialize`, {
        answers, qids
      }, {
        headers: {
          Authorization: token
        }
      });

      console.log(payload);

      if (status === 200) {
        //   Navigate to suggested baskets if register request was successful
        navigation.navigate('SuggestedBaskets');
      }
    }
  };

  useEffect(() => {
    const getOnboardingQuestions = async () => {
      const {
        data: {status, payload},
        data,
      } = await axios.get(`${API_URL}/user/onboard/questions`, {
        headers: {
          Authorization: token
        }
      });
      setButtons(payload);
      setQids(payload.map(i => i.qid));
    }
    getOnboardingQuestions();
  }, [token]);

  return (
    buttons.length ? <ScreenContainer centerX logo>
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
    </ScreenContainer> : null
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
