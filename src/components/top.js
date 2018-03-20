import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="topDiv">
				<h4>FCC Drum Machine</h4>
				<div className="volume">
					VOLUME
					<div className="volumeDisplay">{Math.round(this.props.volume * 100)}</div>
				</div>
				<div className="bankDiv">
					<div className="bank bank1">bank1</div>
					<div className="bank bank2">bank2</div>
				</div>
			</div>
			)
	}
}

export default Top;