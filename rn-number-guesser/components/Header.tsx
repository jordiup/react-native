import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: '#fee440',
		alignItems: 'center',
		justifyContent: 'center',
		// borderBottomEndRadius: 24,
		// borderBottomStartRadius: 24,
	},
	headerTitle: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
