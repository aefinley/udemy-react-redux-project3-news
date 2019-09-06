import React, { Component } from 'react'
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../../store/actions';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(otherNews())
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Home);