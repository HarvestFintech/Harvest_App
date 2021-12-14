import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Text, ButtonGroup} from 'react-native-elements';

import {ScreenContainer, ButtonPrimary, ButtonClear} from '@shared';

import riskAssessment from './qa';

const RiskAssessment = ({navigation}) => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(0);
  const [answers, setAnswers] = useState([4, 3, 5, 6]);
  const buttons = riskAssessment;

  const updateIndex = selected => setSelected(selected);

  const handleNext = () => {
    console.log(answers);
    setAnswers((answers[0] = 1));
    console.log(answers);

    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleFinish = () => {
    //   TODO:AJ create call to backend and add answers to DB
    navigation.navigate('SuggestedBaskets');
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
          onPress={() => updateIndex()}
          selectedIndex={selected}
          buttons={buttons[page].a}
        />
        <View style={styles.navButtons}>
          {page != 0 && (
            <ButtonClear title="Back" onPress={() => handlePrev()} />
          )}
          {page == buttons.length - 1 ? (
            <ButtonPrimary title="Finish" onPress={() => handleFinish()} />
          ) : (
            <ButtonPrimary title="Next Step" onPress={() => handleNext()} />
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default RiskAssessment;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
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
