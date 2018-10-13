import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page_Content.scss';
import Block_Filter from '../02_components/Block_Filter';
class Page_Content extends React.PureComponent {
	
	
  	render() {

		return (
			
			<div className="Page_Content container">
				<div className="row">
				
				<Block_Filter/>
				</div>	
			</div>
			
		);

  	}

}



export default Page_Content;
