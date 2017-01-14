export default function comments(state = [], action) {
	// same as doing a switch obviously
	if (typeof action.postId !== undefined) {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		};
	}
	return state;
}

// reducer composition: only responsible for handlineg a chunk of state (i.e. one comment out of the whole array)
// main reducer is only concerned with returning the entire comments state
function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];
		case 'REMOVE_COMMENT':
			const i = action.index;
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			];
		default:
			return state;
	}
}