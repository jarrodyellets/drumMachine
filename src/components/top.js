import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="topDiv">
				<h4 className="brand">moog</h4>
				<div className="volume">
					VOLUME
					<div className="Display">{Math.round(this.props.volume * 100)}</div>
				</div>
				<div className="volume">
					SPEED
					<div className="Display">{this.props.pitch}</div>
				</div>
				<div className="bankDiv">
					<span id="mini">mini</span>
		      <label className="switch">
		        <input id="power" type="checkbox" />
		        <span className="slide"></span>
		      </label>
		      <span id="rouge">rouge</span>
				</div>
			</div>
			)
	}
}

export default Top;