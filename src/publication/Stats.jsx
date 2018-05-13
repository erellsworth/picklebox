import React from 'react';
import reduxComponent from '../components/reduxComponent';

class PublicationStats extends reduxComponent {

  render(){ 
    var staff = this.props.data.masthead.staff.filter((staff, index)=>{return !staff.isEditor;}).length;
    var editors = this.props.data.masthead.staff.filter((staff, index)=>{return staff.isEditor;}).length

      return <section className="section">
                <h2 className="title is-2">Stats:</h2>
                <div className="columns">
                  <div className="column">
                    <h4 className="title is 4">{this.props.data.collection.metadata.followerCount} followers</h4>
                  </div>
                  <div className="column">
                    <h4 className="title is 4">{staff} writers</h4>
                  </div>  
                  <div className="column">
                    <h4 className="title is 4">{editors} editors</h4>
                  </div>                                  
                </div>
                <hr/>
            </section>      
  }
}

export default PublicationStats;