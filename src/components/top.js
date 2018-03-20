import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		if(e.target.checked){
			this.props.changeBank(true);
		} else {
			this.props.changeBank(false);
		}
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
		        <input id="power" type="checkbox" onChange={this.handleChange}/>
		        <span className="slide"></span>
		      </label>
		      <span id="rouge">rogue</span>
				</div>
			</div>
			)
	}
}

export default Top;