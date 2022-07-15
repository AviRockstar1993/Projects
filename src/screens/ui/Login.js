import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Text, Button} from 'react-native-paper';
import styles from './LoginCss';
import StringConstant from '../../utills/StringConstant';
import CustomColor from '../../custom/CustomColor';

const Login = ({navigation}) => {
  const [textvalue, setTextValue] = useState('');
  const [emailError, setemailError] = useState('');
  const [passValue, setPassValue] = useState('');
  const [passError, setPassError] = useState('');

  const emailValidator = textvalue => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (textvalue.length === 0) {
      setemailError(StringConstant.enterEmail);
    } else if (reg.test(textvalue) === false) {
      setemailError(StringConstant.validEmail);
    } else if (reg.test(textvalue) === true) {
      setemailError('');
    }
  };

  const passValidator = passValue => {
    if (passValue.length == 0) {
      setPassError(StringConstant.enterPass);
    } else {
      setPassError('');
    }
  };

  const emailCheck = () => {
    if (textvalue.length === 0) {
      setemailError(StringConstant.validEmail);
    } else if (textvalue == StringConstant.emailHint) {
      if (passValue.length == 0 && passValue.length) {
        setPassError(StringConstant.enterPass);
      } else {
        navigation.navigate('HomeScreen');
      }
    }
  };

  return (
    <View style={styles.MainView}>
      <View style={styles.ViewWhiteBack}>
        <View style={styles.ViewForLogo}>
          <View style={styles.ImageLogo}>
            <Image
              source={require('../../assets/images/login.png')}
              style={styles.ImmageStyle}
            />
          </View>

          <View style={styles.EditTextView}>
            <Text variant="titleMedium" style={styles.TextInputStyle}>
              {StringConstant.loginText}
            </Text>
          </View>

          <View style={styles.ViewForTextnput}>
            <TextInput
              variant="bodyMedium"
              dense="true"
              underlineColor={CustomColor.white}
              error={emailError}
              theme={{
                colors: {
                  primary: CustomColor.CustomBlue,
                  height: 25,
                  background: CustomColor.transparent,
                },
              }}
              style={styles.CustomTextInputStyle}
              label={StringConstant.emailid}
              autoCorrect={false}
              autoCapitalize="none"
              value={textvalue}
              onChangeText={text => {
                setTextValue(text);
                emailValidator(textvalue);
              }}
            />
            {emailError ? (
              <Text style={styles.ErrorStyle}>{emailError}</Text>
            ) : null}
          </View>

          <View style={styles.ViewForTextnput}>
            <TextInput
              variant="bodyMedium"
              dense="true"
              underlineColor={CustomColor.white}
              error={passError}
              theme={{
                colors: {
                  primary: CustomColor.CustomBlue,
                  height: 25,
                  background: CustomColor.transparent,
                },
              }}
              style={styles.CustomTextInputStyle}
              label={StringConstant.password}
              autoCorrect={false}
              autoCapitalize="none"
              value={passValue}
              onChangeText={text => {
                setPassValue(text);
                passValidator(passValue);
              }}
            />
            {passError ? (
              <Text style={styles.ErrorStyle}>{passError}</Text>
            ) : null}
          </View>

          <View style={styles.ViewNew}>
            <Button
              style={styles.ButtonStyle}
              color={CustomColor.ButtonColor}
              mode="contained"
              uppercase={false}
              onPress={() => emailCheck()}>
              {StringConstant.loginBtn}
            </Button>
          </View>

          <View style={styles.ForgotPassView}>
            <Text variant="labelMedium" style={styles.TextForgot}>
              {StringConstant.loginForgot}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
