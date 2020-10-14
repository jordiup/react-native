import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import { Card } from '../components/Card';
import colours from '../constants/colours';
import { Input } from '../components/Input';
import { NumberContainer } from '../components/NumberContainer';

export const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberedInputHandler = (inputText) => {
		// Drop any non-number value
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number',
				'Number has to be a number between 1 and 99',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
			);
			return;
		}
		setConfirmed(true);
		setEnteredValue('');
		setSelectedNumber(chosenNumber);
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text style={{ marginVertical: 20 }}>You Selected</Text>
				<NumberContainer>
					{Number.isNaN(selectedNumber) ? 'Invalid Number' : selectedNumber}
				</NumberContainer>
				<Button
					title="START GAME"
					onPress={() => props.onStartGame(selectedNumber)}
				/>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a new game!</Text>
				<Card>
					<Text>Select a number</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCorrect={false}
						keyboardType="numeric"
						maxLength={2}
						onChangeText={(text) => {
							numberedInputHandler(text);
						}}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								color={colours.tertiary}
								title="Reset"
								onPress={resetInputHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								color={colours.accent}
								title="Confirm"
								onPress={confirmInputHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
				{/* <Header title="The " /> */}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: { fontFamily: 'open-sans-bold', fontSize: 20, marginVertical: 20 },
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		minWidth: 30,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});
