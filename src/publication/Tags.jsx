import React from 'react';
import reduxComponent from '../components/reduxComponent';

class PublicationTags extends reduxComponent {

  render(){ 
      return <section className="section">
              <div className="container">
                <h4>Tags:</h4>
                <div className="tags">
                    {this.props.tags.map((tag, index)=>{
                      var url = "https://medium.com/tag/" + tag.toLowerCase();
                      return <a href={url} className="tag is-info is-medium" key={index}>{tag.toLowerCase()}</a>
                    })}
                </div>
              </div>
            </section>      
  }
}

export default PublicationTags;