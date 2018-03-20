import React from 'react';
import Pad from './pads';

class DrumPad extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const buttons = this.props.bank.map((button, i, arr) => {
			return (
				<Pad
					index={i}
					soundId={arr[i].id}
					keyCode={arr[i].keyCode}
					letter={arr[i].letter}
					audioUrl={arr[i].url}
					volume={this.props.volume}
					pitch={this.props.pitch}
				/>

				)
			});
		return(
				<div className="drumPads">{buttons}</div>
		)
	}
}

export default DrumPad;