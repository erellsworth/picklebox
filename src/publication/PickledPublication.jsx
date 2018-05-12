import React from 'react';
import reduxComponent from '../components/reduxComponent';
import PublicationHeader from './Header';
import PublicationTags from './Tags';

class PickledPublication extends reduxComponent {

  render(){ 
    const { store } = this.context;
    var state = store.getState();

    console.log('PickledPublication', state);
    
    if(state.publicationInfo.payload){
      var tintColor = state.publicationInfo.payload.collection.tintColor;
      var styles = {
        background: tintColor.slice(0, 1) + tintColor.slice(3) //for some reason Medium
      }
      return <div className="container is-fullhd" style={styles}>
          {state.publicationInfo.payload.collection &&
            <div>
              <PublicationHeader data={state.publicationInfo.payload.collection} />
              <PublicationTags tags={state.publicationInfo.payload.collection.tags} />
            </div>
          }
      </div>
    }
    
    return <div></div>    
  }
}

export default PickledPublication;