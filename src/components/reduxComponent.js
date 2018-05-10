import { Component } from 'react';
import PropTypes from 'prop-types';

class reduxComponent extends Component {
	componentDidMount(){
		const { store } = this.context;

		if(typeof store !== 'undefined'){
			this.unsubscribe = store.subscribe(() => {
				this.forceUpdate();
			});		
		}
	}

	componentWillUnmount(){
		if(typeof this.unsubscribe === 'function'){
			this.unsubscribe();
		}
	}	
}

reduxComponent.contextTypes = {
	store: PropTypes.object
};

export default reduxComponent;