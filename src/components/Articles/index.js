import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    getArticleData, 
    handleArticleLikes,
    clearArticleData
} from '../../store/actions';

//components
import LikesCounter from './Likes';

class Article extends Component {

    componentDidMount() {
        this.props.dispatch(getArticleData(this.props.match.params.id))
    }

    componentWillUnmount() {
        this.props.dispatch(clearArticleData())
    }

    addLike = (action) => {
        const id = this.props.match.params.id;
        const data = this.props.articles.articleData[0];

        const likes = data.likes[0];
        const dislikes = data.likes[1];

        action === 'ADD' ? data.likes[0] = likes + 1 : data.likes[1] = dislikes + 1

        //go to dispatch
        this.props.dispatch(handleArticleLikes(data, id))
    }

    renderNews = ({articleData}) => (
        articleData ?
            <div>
                <div className="tags">
                    <span>
                        <i className="fa fa-eye">
                            {articleData[0].views}
                        </i>
                    </span>
                    <span>
                        <i className="fa fa-thumbs-up">
                            {articleData[0].likes[0]}
                        </i>
                    </span>
                    <span>
                        <i className="fa fa-thumbs-down">
                            {articleData[0].likes[1]}
                        </i>
                    </span>
                </div>
                <div className="top">
                    <h2>{articleData[0].title}</h2>
                    <span>Article by: <strong>{articleData[0].author}</strong></span>
                </div>
                <img 
                    alt={articleData[0].title}
                    src={`/images/articles/${articleData[0].img}`}
                ></img>
                <div className="body_news">
                    {articleData[0].body}
                </div>
                <div>
                    <LikesCounter 
                        addLike={ (args) => this.addLike(args) }
                        likes={articleData[0].likes[0]}
                        dislikes={articleData[0].likes[1]}
                    />
                </div>
            </div>  
        : null
    )

    render() {
        return (
            <div className="news_container">
                {this.renderNews(this.props.articles)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Article);
