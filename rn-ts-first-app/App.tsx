import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
	const [outputText, setOutputText] = useState(' ');
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 60 }}>
				AWESOME BUG APP 🐛
			</Text>
			<Text style={{ marginBottom: 20 }}>{outputText}</Text>
			<Button
				onPress={(el) => setOutputText('here are our favourite bugs 🐛🐞🐜')}
				title="Press this button! "
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
