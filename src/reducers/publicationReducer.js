import {sessionData, formatting} from '../components/helpers.js';

function publicationInfo(state = {payload:false, last_update: false}, action){

	var session = sessionData.get('publicationInfo', {});
	Object.assign(state, session);

	var method = {
		set_publication_payload: function(){
			console.log('set_publication_payload', action);

			var now = new Date();

			var newState = {
				payload:action.payload,
				last_update: formatting.date(now) + ' ' + formatting.time(now)
			};

			sessionData.set('publicationInfo', newState);
			
			return Object.assign(state, newState);		
		}
	}

	if(method.hasOwnProperty(action.type)){
		return method[action.type]();
	}

	return state;
}

export default publicationInfo;