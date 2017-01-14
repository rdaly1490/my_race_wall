import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {
	render() {
		const { post, i, comments, increment } = this.props;
		const commentCount = comments[post.code] ? comments[post.code].length : 0;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} className="grid-photo" />
					</Link>
				</div>
				<CSSTransitionGroup transitionName="like"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					<span key={post.likes} className="likes-heart">{post.likes}</span>
				</CSSTransitionGroup>
				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
						<button onClick={increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
						<Link className="button" to={`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{` ${commentCount}`}
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		);
	}
}