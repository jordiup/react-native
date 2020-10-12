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
export const GoalItem = () => {
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
							width: '80%',
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
};

const styles = StyleSheet.create({
	container: {
		overflow: 'scroll',
		flex: 1,
		backgroundColor: '#f4f4f4',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
