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
} from 'react-native';
import { GoalInput } from './components/GoalInput';

export default function App() {
	const [goals, setGoals] = useState([{ key: 0, value: '' }]);

	const addGoalHandler = (enteredGoal: string) => {
		console.log(enteredGoal);
		setGoals([{ key: goals.length, value: enteredGoal }, ...goals]);
	};

	return (
		<View style={styles.container}>
			<View>
				<GoalInput addGoalHandler={addGoalHandler} />

				<FlatList
					data={goals}
					contentContainerStyle={{
						flexDirection: 'column',
						alignItems: 'center',
					}}
					renderItem={(itemData) => {
						if (itemData.item.value == '') return null;
						return (
							<View
								style={{
									backgroundColor: ['#5e60ce', '#48bfe3', '#72efdd'][
										itemData.item.key % 3
									],
									height: 80,
									width: 80,
									marginVertical: 20,
								}}
							>
								<Text>{itemData.item.value}</Text>
							</View>
						);
					}}
				/>
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
