import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import colours from '../constants/colours';

export const Input = (props: TextInputProps) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: colours.accent,
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});
