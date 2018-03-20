import React from 'react';
import ReactDOM from 'react-dom';
import DrumPad from './components/drumPads';
import Pad from './components/pads';
import Slider from './components/slider';
import Top from './components/top';

const bank1 = [{
		keyCode: 81,
		letter: 'Q',
		id: 'Heater-1',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-1.mp3'
	}, {
		keyCode: 87,
		letter: 'W',
		id: 'Heater-2',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-2.mp3'
	}, {
		keyCode: 69,
		letter: 'E',
		id: 'Heater-3',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-3.mp3'
	}, {
		keyCode: 65,
		letter: 'A',
		id: 'Heater-4',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-4.mp3'
	}, {
		keyCode: 83,
		letter: 'S',
		id: 'Clap',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-5.mp3'
	}, {
		keyCode: 68,
		letter: 'D',
		id: 'Open-HH',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-6.mp3'
	}, {
		keyCode: 90,
		letter: 'Z',
		id: 'Kick-n-Hat',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-7.mp3'
	}, {
		keyCode: 88,
		letter: 'X',
		id: 'Kick',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-8.mp3'
	}, {
		keyCode: 67,
		letter: 'C',
		id: 'Closed-HH',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-9.mp3'
	}];

const bank2 = [{
		keyCode: 81,
		letter: 'Q',
		id: 'Chord-1',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-1.mp3'
	}, {
		keyCode: 87,
		letter: 'W',
		id: 'Chord-2',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-2.mp3'
	}, {
		keyCode: 69,
		letter: 'E',
		id: 'Chord-3',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-3.mp3'
	}, {
		keyCode: 65,
		letter: 'A',
		id: 'Shaker',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-4.mp3'
	}, {
		keyCode: 83,
		letter: 'S',
		id: 'Open-HH',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-5.mp3'
	}, {
		keyCode: 68,
		letter: 'D',
		id: 'Closed-HH',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-6.mp3'
	}, {
		keyCode: 90,
		letter: 'Z',
		id: 'Punchy-Kick',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-7.mp3'
	}, {
		keyCode: 88,
		letter: 'X',
		id: 'Side-Stick',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-8.mp3'
	}, {
		keyCode: 67,
		letter: 'C',
		id: 'Snare',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-9.mp3'
	}];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: true,
			currentBank: bank2,
			volume: 0.5,
			pitch: 1.00
		}
		this.changeVolume = this.changeVolume.bind(this);
		this.changePitch = this.changePitch.bind(this)
	}

	changeVolume(input){
		this.setState({ volume: input });
	}

	changePitch(input){
		this.setState({ pitch: input });
	}

	render() {
		return (
			<div className="machine">
			<Top volume={this.state.volume} pitch={this.state.pitch} bankTitle={this.state.bankTitle} />
				<div className="controls">
					<Slider volume={this.state.volume} 
									pitch={this.state.pitch} 
									newVolume={this.changeVolume}
									newPitch={this.changePitch}/>
				 	<DrumPad bank={this.state.currentBank} volume={this.state.volume} pitch={this.state.pitch} />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

