import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from "../actions/index";

class PostsIndex extends Component{
    componentWillMount(){
        console.log('componentWillMount~');
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
            List of Blog Posts.
            </div>
        );
    }
};

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch); // 액션 생성자 찾는 프로세스
}*/

export default connect(null, { fetchPosts })(PostsIndex);