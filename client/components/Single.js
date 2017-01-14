import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
	render() {
		// params made available by react router
		const { posts, comments, params } = this.props;
		const { postId } = params

		// get photo/post by index
		const i = posts.findIndex(post => post.code === postId);
		const post = posts[i];
		const postComments = comments[postId] || [];

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props} />
			</div>
		);
	}
}