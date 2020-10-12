import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState('');

	return (
		<View
			style={{
				flexDirection: 'row',
				marginVertical: 32,
			}}
		>
			<TextInput
				placeholder="type something!!!"
				style={{
					borderColor: '#7400b8',
					borderWidth: 1,
					padding: 10,
					paddingHorizontal: 24,
					borderRadius: 24,
					width: '80%',
				}}
				value={enteredGoal}
				onChangeText={(txt) => {
					setEnteredGoal(txt);
				}}
				onEndEditing={() => {
					props.addGoalHandler(enteredGoal);
					setEnteredGoal('');
				}}
			/>
			<Button
				title="ADD"
				onPress={() => {
					props.addGoalHandler(enteredGoal);
				}}
			/>
		</View>
	);
};
