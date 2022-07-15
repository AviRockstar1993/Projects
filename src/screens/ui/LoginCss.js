import {StyleSheet} from 'react-native';
import CustomColor from '../../custom/CustomColor';

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    backgroundColor: CustomColor.CustomBlue,
  },
  ViewWhiteBack: {
    height: '60%',
    flex: 1,
    justifyContent: 'center',
  },
  ViewForLogo: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: CustomColor.white,
  },
  ImageLogo: {
    marginTop: 25,
    marginLeft: 20,
  },
  ImmageStyle: {
    width: 30,
    height: 30,
  },
  EditTextView: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  TextInputStyle: {
    fontSize: 16,
    fontFamily: 'HPSimplifiedW01-Bold',
    color: CustomColor.black,
  },
  ViewForTextnput: {
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  CustomTextInputStyle: {
    borderWidth: 1,
    borderColor: CustomColor.grey,
    borderRadius: 5,
  },
  ErrorStyle: {
    color: 'red',
    paddingHorizontal: 10,
  },
  ButtonStyle: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 5,
    borderRadius: 6,
  },
  ForgotPassView: {
    marginTop: 25,
    marginLeft: 20,
  },
  TextForgot: {
    color: CustomColor.CustomBlue,
    marginBottom: 25,
  },
  ViewNew: {
    marginTop: 10,
  },
});

export default styles;
