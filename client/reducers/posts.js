// a reducer takes in 2 things:
//   1. the action
//   2. copy of current state

// every single reducer runs every time you dispatch an action

export default function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			return [
				...state.slice(0, i),
				{...state[i], likes: state[i].likes + 1}, // object spread, similar to Object.assign
				...state.slice(i + 1)
			];
		default:
			return state;
	}
}