import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';
import styled from 'styled-components';

const ExpatHeader = styled.header`
  text-align: center;
  padding: 10px 0;
  font-size: 1.5em;
  border: solid;
  background-color: #E85A4F;
  color: #EAE7DC;
  `;

  const StoryLinks = styled.div`
  font-size: 1em;
  
  `;

  const UploadLinks = styled.div`
  position: absolute;
  
  background-color: #E85A4F;
  `;

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchStories();
    }
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
        // this.props.fetchStories();
        }
    }
  
    render() {
        return (
            <div className='main'>
                <ExpatHeader>
                <div className='new-posts'> New posts from Expats</div>
                </ExpatHeader>
                <div className='all-stories'>
                
                {/* {console.log(this.props.stories)} */}
                {/* this.props.stories &&  */}
                    {this.props.stories.map(story => {
                        console.log(story);
                        return (
                            <StoryLinks>
                            <div>
                                <div id={story.id} className='story'>
                                    <Link to={ `/api/stories/${story.id}`}>
                                        {''}
                                        <img src={story.image_URL} /> 
                                        
                                        <h1>{story.name}</h1>
                                    </Link>
                                </div>
                            </div>
                            </StoryLinks>
                        );
                    })}
                    
                </div>
                <UploadLinks>
                <UploadForm component={UploadForm}/>
                </UploadLinks>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        stories: state.stories,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchStories }
)(Dashboard);