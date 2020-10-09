import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]
  
  return <NativeTextInput style=
  {Object.assign({}, style, {borderColor: error ? '#d73a4a': {textInputStyle}})}{...props} />;
};

export default TextInput;