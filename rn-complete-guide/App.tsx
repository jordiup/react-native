import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	FlatList,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableHighlightBase,
	Modal,
} from 'react-native';
import { GoalInput } from './components/GoalInput';

export default function App() {
	const [goals, setGoals] = useState([{ key: '', value: '' }]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (enteredGoal: string) => {
		console.log(enteredGoal);
		setGoals([
			{
				key: Math.floor(Math.random() * Math.floor(99999999)).toString(),
				value: enteredGoal,
			},
			...goals,
		]);
	};

	const removeGoalHandler = (goalId) => {
		console.log(goalId);
		console.log(goals);

		let filteredGoals = goals.filter((goal) => {
			goal.key != goalId;
		});

		setGoals([...filteredGoals]);
		console.log(goals);
	};

	return (
		<View style={styles.container}>
			<View>
				<View style={{ marginTop: 40 }}>
					<Button
						title="add new goal"
						onPress={() => {
							setIsAddMode(true);
						}}
					/>
				</View>

				<Modal visible={isAddMode} animationType="slide">
					<GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} />

					<FlatList
						data={goals}
						contentContainerStyle={{
							flexDirection: 'column',
							alignItems: 'center',
						}}
						renderItem={(itemData) => {
							if (itemData.item.value == '') return null;
							return (
								<TouchableOpacity
									activeOpacity={0.6}
									style={{
										backgroundColor: ['#5e60ce', '#48bfe3', '#72efdd'][
											Number.parseInt(itemData.item.key) % 3
										],
										height: 80,
										width: 80,
										marginVertical: 20,
									}}
									onPress={() => removeGoalHandler(itemData.item.key)}
								>
									<Text>{itemData.item.value}</Text>
								</TouchableOpacity>
							);
						}}
					/>
				</Modal>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: 'scroll',
		flex: 1,
		backgroundColor: '#f4f4f4',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
