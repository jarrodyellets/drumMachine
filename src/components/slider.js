import React from 'react';

class Slider extends React.Component {
	constructor(props){
		super(props);
	
		this.newVolume = this.newVolume.bind(this);
		this.newPitch = this.newPitch.bind(this);
	}

	newVolume(e){
		this.props.newVolume(e.target.value);
	}

	newPitch(e){
		this.props.newPitch(e.target.value);
	}

	render() {
		return (
			<div className='sliderCont'>
				<div className='sliderDiv'>	
					<input type='range' className='slider' value={this.props.volume} min='0' max='1' step="0.01" onChange={this.newVolume}/>
				</div>
				<div className='sliderDiv'>	
					<input type='range' className='slider' value={this.props.pitch} min='0.1' max='2.0' step="0.01" onChange={this.newPitch}/>
				</div>
			</div>
			)
	}
}

export default Slider; 