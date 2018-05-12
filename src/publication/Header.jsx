import React from 'react';
import reduxComponent from '../components/reduxComponent';

class PublicationHeader extends reduxComponent {

  render(){ 
      return <section className="hero">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                   {this.props.data.name}
                  </h1>
                  <h2 className="subtitle">
                    {this.props.data.description}
                  </h2>
                </div>
              </div>
            </section>      
  }
}

export default PublicationHeader;