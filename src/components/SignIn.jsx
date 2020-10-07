import React from 'react';
import { Text, StyleSheet,TouchableWithoutFeedback, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'

const initialValues = {
  userName: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
    height: '50%'
  },
  user: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    height: 50,
    borderColor: '#B2ABAB',
    borderWidth: 1
  },
  password: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    height: 50,
    borderColor: '#B2ABAB',
    borderWidth: 1
  },
  submit: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    color: '#ffffff',
    backgroundColor: 'blue',
    textAlign: 'center',
    borderRadius: 5
  }
});

const validationSchema = yup.object().shape({
  userName: yup
    .string().required('UserName is required'),
  password: yup
    .string().min(8).required('Password is required'),
})

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.user} name="userName" placeholder="UserName" />
      <FormikTextInput style={styles.password} name="password" placeholder="Password" secureTextEntry={true} />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.submit}>Sign in</Text>
      </TouchableWithoutFeedback>    
    </View>
  );
};

const signIn = () => {
  const onSubmit = values => {
    const userName = values.userName;
    const password = values.password;
      console.log(`Your userName is ${userName} and password is ${password}`);
    
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} onSubmit={values => {
      console.log(values)}}>
      {({ handleSubmit, errors, touched }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default signIn;
