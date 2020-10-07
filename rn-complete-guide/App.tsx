import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<TextInput placeholder="type something!!!" />
				<Button title="ADD" />
			</View>
			<View></View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
