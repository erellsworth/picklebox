import React from 'react';
import reduxComponent from '../components/reduxComponent';

class PublicationHeader extends reduxComponent {

  render(){ 
    var medium_url = "https://medium.com/" + this.props.data.slug;
    var twitter_url = false;
    var facebook_url = false;

    if(this.props.data.twitterUsername){
      twitter_url = "https://twitter.com/" + this.props.data.twitterUsername;
    }
    if(this.props.data.facebookPageName){
      facebook_url = "https://facebook.com/" + this.props.data.facebookPageName;
    }

    return <section className="section">
            <h1 className="title is-1">Publication info:</h1>
            <div className="columns">
                <div className="column is-half">
                    <h2 className="title">
                     <a href={medium_url} target="_blank">{this.props.data.name}</a>
                    </h2>
                    <h2 className="subtitle ">
                      {this.props.data.header.title}
                    </h2>                    
                </div>
                <div className="column is-half">
                    {twitter_url &&
                      <h3>Twitter: <a href={twitter_url} target="_blank">@{this.props.data.twitterUsername}</a></h3>
                    }
                    {facebook_url &&
                      <h3>Facebook: <a href={facebook_url} target="_blank">{this.props.data.facebookPageName}</a></h3>
                    }                   
                </div>
            </div>   
            <p>{this.props.data.header.description}</p>
            <hr/>  
          </section>                            
                  
  }
}

export default PublicationHeader;