import React from 'react';
import Pad from './pads';

const DrumPad = (props) => {
	const buttons = props.bank.map((button, i, arr) => {
	return (
		<div key={i}>
			<Pad
				index={i}
				soundId={arr[i].id}
				keyCode={arr[i].keyCode}
				letter={arr[i].letter}
				audioUrl={props.power ? arr[i].url : ''}
				volume={props.volume}
				pitch={props.pitch}
				power={props.power}
			/>
		</div>

		)
	});

	return (
		<div className="drumPads">{buttons}</div>
		)
}

export default DrumPad;