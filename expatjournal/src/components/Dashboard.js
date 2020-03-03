import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchStories();
    }

    render() {
        return (
            <div className='main'>
                <UploadForm />
                <div className='new-posts'> New posts from Expats</div>
                <div className='all-stories'>
                    {this.props.stories.map(story => {
                        return (
                            <div>
                                <div id={story.id} className='story'>
                                    <Link to={ `/stories/${story.id}`}>
                                        {''}
                                        <img src={story.image_URL} /> 
                                        {/* check naming conventions!! */}
                                        <h1>{story.name}</h1>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                    
                </div>
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