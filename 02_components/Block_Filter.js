import React from 'react';
import NewsFrame from '../03_primitives/NewsFrame';
import {connect} from "react-redux";
import {loadNews,loadHeroes,loadItems} from "../redux/actions";
import './Block_Filter.scss';

class Block_Filter extends React.PureComponent {
	
	state = {
		style:'in',
		howToSort: false,
		list:[0,1,2,3,4,5,6],
	};
	changeArr=()=>{
		let output = [];

		for(let n=0;n<this.state.list.length;n++){
			if(this.state.howToSort){
				output.push(this.state.list[n]);
			}
			else{
				output.push(this.state.list[this.state.list.length-n-1]);
			}
		}
		return output
	}
	changeArrFunc=()=>{
		this.setState({howToSort:!this.state.howToSort})
	}
	changeStyle=(e)=>{
		if(e==='in'){
			this.setState({style:'in'})
		}
		if(e==='out'){
			this.setState({style:'out'})
		}
		if(e==='static'){
			this.setState({style:'static'})
		}
		if(e==='off'){
			this.setState({style:'off'})
		}
	}

  	render() {
		let arr = this.changeArr()
		return (
			
			<div className="Block_Filter">
			<div>
				<input type="button" onClick={this.props.loadNews} value="news"/>
				<input type="button" onClick={this.props.loadHeroes} value="heroes"/>
				<input type="button" onClick={this.props.loadItems} value="items"/>
			</div>

			<hr/>
			<div>
				<div>test menu</div>
				<div className={this.state.style}>{arr.map(it=>{
					return <NewsFrame key={it} title={it}/>})}
					<div><input type="button" onClick={this.changeArrFunc} value="filter"/></div>
					<input type="button" onClick={()=>this.changeStyle('in')} value="style in"/>
					<input type="button" onClick={()=>this.changeStyle('out')} value="style out"/>
					<input type="button" onClick={()=>this.changeStyle('static')} value="style static"/>
					<input type="button" onClick={()=>this.changeStyle('off')} value="style off"/>
				</div>
			</div>
			</div>
			
		);

  	}

}




export default connect((state) => ({
	reducer: state.reducer
}),
{loadNews,loadHeroes,loadItems})(Block_Filter);