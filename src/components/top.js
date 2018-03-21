import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);

		this.bankChange = this.bankChange.bind(this);
		this.powerChange = this.powerChange.bind(this);
	}

	bankChange(e){
		if(e.target.checked){
			this.props.changeBank(true);
		} else {
			this.props.changeBank(false);
		}
	}

	powerChange(e){
		if(e.target.checked){
			this.props.changePower(true);
		} else {
			this.props.changePower(false);
		}
	}

	render() {
		return (
			<div className="topDiv">
				<h4 className="brand">moog</h4>
				<div className="volume">
					VOLUME
					<div className="Display">{this.props.power ? Math.round(this.props.volume * 100) : ""}</div>
				</div>
				<div className="volume">
					SPEED
					<div className="Display">{this.props.power ? this.props.pitch : ""}</div>
				</div>
				<div className="knobDiv">
					<span className="leftLabel">off</span>
		      <label className="switch">
		        <input type="checkbox" onChange={this.powerChange}/>
		        <span className="slide"></span>
		      </label>
		      <span className="rightLabel">on</span>
				</div>
				<div className="knobDiv">
					<span className="leftLabel">mini</span>
		      <label className="switch">
		        <input type="checkbox" onChange={this.bankChange}/>
		        <span className="slide"></span>
		      </label>
		      <span className="rightLabel">rogue</span>
				</div>
			</div>
			)
	}
}

export default Top;