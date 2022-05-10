import { StyleSheet } from 'react-native';
import { colors } from '../../Styles/colors';

export const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: colors.tertiary,
		padding: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 6,
		marginHorizontal: 10,
		marginBottom: 10,
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'space-between',
	},
	text: {
		color: colors.dark,
		fontSize: 18,
	},
	done: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
		color: colors.dark2,
	},

	dateContainer: {
		marginTop: 10,
		paddingTop: 10,
		borderTopWidth: 1,
		borderTopColor: colors.dark2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	date: {
		fontStyle: 'italic',
	},
});
