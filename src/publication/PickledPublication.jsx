import React from 'react';
import reduxComponent from '../components/reduxComponent';
import PublicationHeader from './Header';
import PublicationStats from './Stats';
import PublicationTags from './Tags';

class PickledPublication extends reduxComponent {

  render(){ 
    const { store } = this.context;
    var state = store.getState();

   // console.log('PickledPublication', state);
    
    if(state.publicationInfo.payload){
      var color = state.publicationInfo.payload.collection.tintColor;
      var styles = {};
      if(color){
        styles.background = color.slice(0, 1) + color.slice(3);
      }

      return <div className="container is-fullhd" style={styles}>
          {state.publicationInfo.payload.collection &&
            <div>
              <PublicationHeader data={state.publicationInfo.payload.collection} />
              <PublicationStats data={state.publicationInfo.payload} />

              <PublicationTags tags={state.publicationInfo.payload.collection.tags} />
              {state.publicationInfo.last_update &&
                <p>Last updated: {state.publicationInfo.last_update}</p>
              }
            </div>
          }
      </div>
    }
    
    return <div></div>    
  }
}

export default PickledPublication;