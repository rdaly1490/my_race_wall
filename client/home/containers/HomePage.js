import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	constructor() {
		super();
		this.sliderImages = [];
	}

	componentDidMount() {
		const debounce = this.debounce.bind(this);
		const checkSlide = this.checkSlide.bind(this);
		this.sliderImages = document.querySelectorAll('.slide-in');
		window.addEventListener('scroll', debounce(checkSlide));
	}

	debounce(func, wait = 20, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		}
	}

	checkSlide() {
		console.log('sdlsknf')
		const sliderImages = this.sliderImages;
		sliderImages.forEach(sliderImage => {
	        // half way through the image
	        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
	        // bottom of the image
	        const imageBottom = sliderImage.offsetTop + sliderImage.height;
	        const isHalfShown = slideInAt > sliderImage.offsetTop;
	        const isNotScrolledPast = window.scrollY < imageBottom;
	        if (isHalfShown && isNotScrolledPast) {
	        	console.log('showing')
				sliderImage.classList.add('on-screen');
	        } else {
	        	console.log('not showing')
				sliderImage.classList.remove('on-screen');
	        }
		});
	}

	render() {
		return (
			<div>
				<div className="hero-img"></div>
				<div className="about">
					<div className="info-block">
						<img src="http://unsplash.it/200/500" className="align-left slide-in on-screen" />
						<p>
							Lorem ipsum Nisi laboris consectetur eu enim sunt pariatur. Lorem ipsum Eu ad ullamco mollit anim aliqua sint Duis occaecat cillum et. Lorem ipsum Consequat quis pariatur magna do nostrud eu mollit mollit minim incididunt. Lorem ipsum Esse sed aliquip minim elit mollit non. Lorem ipsum Qui elit voluptate dolor fugiat exercitation Ut. Lorem ipsum Pariatur quis ex aliqua esse est consectetur.
						</p>
					</div>
					<div className="info-block">
						<p>
							Lorem ipsum Nisi laboris consectetur eu enim sunt pariatur. Lorem ipsum Eu ad ullamco mollit anim aliqua sint Duis occaecat cillum et. Lorem ipsum Consequat quis pariatur magna do nostrud eu mollit mollit minim incididunt. Lorem ipsum Esse sed aliquip minim elit mollit non. Lorem ipsum Qui elit voluptate dolor fugiat exercitation Ut. Lorem ipsum Pariatur quis ex aliqua esse est consectetur.
						</p>
						<img src="http://unsplash.it/200/500" className="align-right slide-in" />
					</div>
					<div className="info-block">
						<img src="http://unsplash.it/200/500" className="align-left slide-in" />
						<p>
							Lorem ipsum Nisi laboris consectetur eu enim sunt pariatur. Lorem ipsum Eu ad ullamco mollit anim aliqua sint Duis occaecat cillum et. Lorem ipsum Consequat quis pariatur magna do nostrud eu mollit mollit minim incididunt. Lorem ipsum Esse sed aliquip minim elit mollit non. Lorem ipsum Qui elit voluptate dolor fugiat exercitation Ut. Lorem ipsum Pariatur quis ex aliqua esse est consectetur.
						</p>
					</div>
				</div>
			</div>
		);
	}
}