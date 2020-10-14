import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ImageBackground,
} from 'react-native';
import { Card } from '../components/Card';

export const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<ImageBackground
				source={require('../assets/pattern.jpg')}
				style={styles.image}
				imageStyle={{ opacity: 0.22 }}
				resizeMode={'cover'}
			>
				<Card style={styles.card}>
					<Text>The game is over</Text>
					<Text>Number of rounds: {props.totalRounds}</Text>
					<Text>Number was: {props.userNumber}</Text>
					<Button title="NEW GAME" onPress={props.onRestart} />
				</Card>
				{/* <Image
					resizeMode={'contain'}
					style={styles.image}
					source={require('../assets/pattern.jpg')}
				/> */}
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		// opacity: 1,
	},
	card: {
		marginTop: 40,
	},
	image: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
	},
});
