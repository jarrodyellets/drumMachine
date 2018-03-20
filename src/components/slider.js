import React from 'react';

class Slider extends React.Component {
	constructor(props){
		super(props);
	
		this.newVolume = this.newVolume.bind(this);
	}

	newVolume(e){
		this.props.newVolume(e.target.value);
	}

	render() {
		return (
			<div className='sliderDiv'>	
				<input type='range' className='slider' value={this.props.volume} min='0' max='1' step="0.01" onChange={this.newVolume}/>
			</div>
			)
	}
}

export default Slider; 