import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		  console.log('hi');
		return (
			<Fragment>
			
			<div className="container">
				<div className="row">
					<div className="col-1 cl1"><div>1</div></div>
					<div className="col-1 cl1">2</div>
					<div className="col-1 cl1">3</div>
					<div className="col-1 cl1">4</div>
					<div className="col-1 cl1">5</div>
					<div className="col-1 cl1">6</div>
					<div className="col-1 cl1">7</div>
					<div className="col-1 cl1">8</div>
					<div className="col-1 cl1">9</div>
					<div className="col-1 cl1">10</div>
					<div className="col-1 cl1">11</div>
					<div className="col-1 cl1">12</div>

					<div className="col-12"><div className="cl1">12</div></div>
				</div>
			</div>
			</Fragment>
		);

  	}

}



export default Block_MainPage;
