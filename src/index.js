import React from 'react';
import ReactDOM from 'react-dom';
import DrumPad from './components/drumPads';
import Slider from './components/slider';
import Top from './components/top';

const rogue = [{
		keyCode: 81,
		letter: 'Q',
		id: 'Keys-1',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-1.mp3'
	}, {
		keyCode: 87,
		letter: 'W',
		id: 'Keys-2',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-2.mp3'
	}, {
		keyCode: 69,
		letter: 'E',
		id: 'Keys-3',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-3.mp3'
	}, {
		keyCode: 65,
		letter: 'A',
		id: 'Awake',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-4.mp3'
	}, {
		keyCode: 83,
		letter: 'S',
		id: 'Bounce',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-5.mp3'
	}, {
		keyCode: 68,
		letter: 'D',
		id: 'String',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-6.mp3'
	}, {
		keyCode: 90,
		letter: 'Z',
		id: 'Hole',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-7.mp3'
	}, {
		keyCode: 88,
		letter: 'X',
		id: 'Moon',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-8.mp3'
	}, {
		keyCode: 67,
		letter: 'C',
		id: 'Space',
		url: 'https://www.jarrodyellets.com/sounds/moog/rouge-9.mp3'
	}];

const mini = [{
		keyCode: 81,
		letter: 'Q',
		id: 'Phase Laser',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-1.mp3'
	}, {
		keyCode: 87,
		letter: 'W',
		id: 'Drill',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-2.mp3'
	}, {
		keyCode: 69,
		letter: 'E',
		id: 'Droplet',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-3.mp3'
	}, {
		keyCode: 65,
		letter: 'A',
		id: 'Plane',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-4.mp3'
	}, {
		keyCode: 83,
		letter: 'S',
		id: 'Groove',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-5.mp3'
	}, {
		keyCode: 68,
		letter: 'D',
		id: 'Leopard',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-6.mp3'
	}, {
		keyCode: 90,
		letter: 'Z',
		id: 'Wave',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-7.mp3'
	}, {
		keyCode: 88,
		letter: 'X',
		id: 'Scope',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-8.mp3'
	}, {
		keyCode: 67,
		letter: 'C',
		id: 'Comet',
		url: 'https://www.jarrodyellets.com/sounds/moog/mini-9.mp3'
	}];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: false,
			currentBank: mini,
			volume: 0.5,
			pitch: 1.00
		}
		this.changeVolume = this.changeVolume.bind(this);
		this.changePitch = this.changePitch.bind(this);
		this.changeBank = this.changeBank.bind(this);
		this.changePower = this.changePower.bind(this);
	}

	changeVolume(input){
		this.setState({ volume: input });
	}

	changePitch(input){
		this.setState({ pitch: input });
	}

	changeBank(input){
		if(input){
			this.setState({ currentBank: rogue });
		} else {
			this.setState({ currentBank: mini });
		}
	}

	changePower(input){
		if(input){
			this.setState({ power: true });
		} else {
			this.setState({ power: false });
		}
	}

	render() {
		return (
			<div>
				<div className="machine">
				<Top volume={this.state.volume} 
						 pitch={this.state.pitch} 
						 bankTitle={this.state.bankTitle} 
						 changeBank={this.changeBank}
						 power={this.state.power}
						 changePower={this.changePower} />
					<div className="controls">
						<Slider volume={this.state.volume} 
										pitch={this.state.pitch} 
										newVolume={this.changeVolume}
										newPitch={this.changePitch}/>
					 	<DrumPad bank={this.state.currentBank} 
					 					 volume={this.state.volume} 
					 					 pitch={this.state.pitch}
					 					 power={this.state.power}
					 					  />
					</div>
				</div>
  			<div id="author">&copy; Jarrod Yellets | 2018</div>
  		</div>
  		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

