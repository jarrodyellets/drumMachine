import React from 'react';

class Pad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.playAudio = this.playAudio.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	conponentWillMount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	playAudio() {
		const audio = document.getElementById(this.props.letter);
		this.handleClick();
		setTimeout(() => this.handleClick(), 150);
		if(this.props.power){
			audio.volume = this.props.volume;
			audio.playbackRate = this.props.pitch;
			audio.currentTime = 0;
			audio.play();
		} 
	}

	handleKeyPress(e) {
		if(e.keyCode === this.props.keyCode){
			this.playAudio();
		}
	}

	handleClick() {
		const currentState = this.state.active;
		this.setState({ active: !currentState});
	}
	

	render() {
		return (
			<div className={['pad', this.state.active ? 'padActive' : null].join(' ')} onClick={this.playAudio}>
				<div className={this.state.active ? 'letterActive' : null}>{this.props.soundId}</div>
				<div className={['letter', this.state.active ? 'keyLetter' : null, this.state.active && this.props.power ? 'active' : null].join(' ')}>{this.props.letter}</div>
				<audio id={this.props.letter} src={this.props.audioUrl}></audio>
			</div>
			)
	}
}

export default Pad;