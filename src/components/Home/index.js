import React, { Component } from 'react'
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../../store/actions';

//sections
import LatestNews from './LatestNews';
import OtherNews from './OtherNews';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(otherNews())
    }

    render() {
        const articles = this.props.articles;
        return (
            <>
                <LatestNews latest={articles.latest}/> 
                <OtherNews otherNews={articles.otherNews}/>
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Home);