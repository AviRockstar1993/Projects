import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Text, Button} from 'react-native-paper';

const Login = () => {
  const [textvalue, setTextValue] = useState('');
  const [emailError, setemailError] = useState('');

  const emailValidator = textvalue => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (textvalue.length === 0) {
      setemailError(stringConstForT2.enterEmail);
    } else if (reg.test(textvalue) === false) {
      setemailError(stringConstForT2.validEmail);
    } else if (reg.test(textvalue) === true) {
      setemailError('');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text variant="titleSmall">Title Small</Text>
    </View>
  );
};

export default Login;
