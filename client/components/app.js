import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	const {posts, comments} = state;
	return {
		posts,
		comments
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// will add all data from state to props to Main.  Also connects actionCreators.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
