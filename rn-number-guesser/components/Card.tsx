import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		padding: 20,
		borderRadius: 24,
		// Shadow props only work on ios
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		backgroundColor: 'white',
		// Android can use elevation
		elevation: 5,
	},
});
