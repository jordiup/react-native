import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
} from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [goals, setGoals] = useState<string[]>(['']);

	const addGoalHandler = () => {
		console.log(enteredGoal);
		setGoals([enteredGoal, ...goals]);
	};

	return (
		<View style={styles.container}>
			<View>
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
						}}
						value={enteredGoal}
						onChangeText={(txt) => {
							setEnteredGoal(txt);
						}}
						onEndEditing={() => {
							addGoalHandler();
							setEnteredGoal('');
						}}
					/>
					<Button
						title="ADD"
						onPress={() => {
							addGoalHandler();
						}}
					/>
				</View>
				<ScrollView
					contentContainerStyle={{
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{goals.map((goal, i) => {
						if (goal == '') return null;
						return (
							<View
								style={{
									backgroundColor: ['#5e60ce', '#48bfe3', '#72efdd'][i % 3],
									height: 80,
									width: 80,
									marginVertical: 20,
								}}
								key={i}
							>
								<Text>{goal}</Text>
							</View>
						);
					})}
					{/* <View style={{ backgroundColor: '#5e60ce', height: 80, width: 80 }} />
					<View style={{ backgroundColor: '#48bfe3', height: 80, width: 80 }} />
					<View style={{ backgroundColor: '#72efdd', height: 80, width: 80 }} /> */}
				</ScrollView>
			</View>
			<View></View>
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
