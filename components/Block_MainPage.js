import React,{Fragment} from 'react';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<Fragment>
			
			<div className="container">
				<div className="row">
					<div className="col-12"><div className="cl1">desktop</div></div>
				</div>
				<div className="row">
					<div className="col-1"><div className="cl1">1</div></div>
					<div className="col-1"><div className="cl1">2</div></div>
					<div className="col-1"><div className="cl1">3</div></div>
					<div className="col-1"><div className="cl1">4</div></div>
					<div className="col-1"><div className="cl1">5</div></div>
					<div className="col-1"><div className="cl1">6</div></div>
					<div className="col-1"><div className="cl1">7</div></div>
					<div className="col-1"><div className="cl1">8</div></div>
					<div className="col-1"><div className="cl1">9</div></div>
					<div className="col-1"><div className="cl1">10</div></div>
					<div className="col-1"><div className="cl1">11</div></div>
					<div className="col-1"><div className="cl1">12</div></div>
				</div>
				<div className="row">
					<div className="col-12"><div className="cl1">mobile</div></div>
				</div>
				<div className="row">
					<div className="col-2"><div className="cl1">1</div></div>
					<div className="col-2"><div className="cl1">2</div></div>
					<div className="col-2"><div className="cl1">3</div></div>
					<div className="col-2"><div className="cl1">4</div></div>
					<div className="col-2"><div className="cl1">5</div></div>
					<div className="col-2"><div className="cl1">6</div></div>
				</div>
				<div className="row no-gutters block">
					<div className="col-12"><div className="cl1">но гатерс убирает отрицательный маргин</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
				</div>
				<div className="row">
						<div className="col-4"><div className="cl1">оффсет</div></div>
						<div className="col-4 offset-4 Main"><div className="cl1">оффсет</div></div>
					</div>
			</div>
			<div className="container-fluid block">
				<div className="row">
					<div className="col-12"><div className="cl1">флуид</div></div>
				</div>
				<div className="row">
					<div className="col-3 Main"><div className="cl1">1</div></div>
					<div className="col-3 Main"><div className="cl1">1</div></div>
					<div className="col-3 Main"><div className="cl1">1</div></div>
					<div className="col-3 Main"><div className="cl1">1</div></div>
				</div>

				<div className="row no-gutters block">
					<div className="col-12"><div className="cl1">но гатерс убирает отрицательный маргин</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
					<div className="col-3 Main"><div className="cl1">3</div></div>
				</div>
			</div>

			</Fragment>
		);

  	}

}



export default Block_MainPage;
