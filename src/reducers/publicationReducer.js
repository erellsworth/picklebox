function publicationInfo(state = {payload:false}, action){

	var method = {
		set_publication_payload: function(){
			console.log('set_publication_payload', action);
			
			return Object.assign(state, {payload:action.payload});		
		}
	}

	if(method.hasOwnProperty(action.type)){
		return method[action.type]();
	}

	return state;
}

export default publicationInfo;