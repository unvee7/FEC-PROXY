const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const Review = require('./Review.jsx');
const AllReviewsLightBox = require('./allReviews.jsx');
const Search = require('./Search.jsx');

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      isToggled: false,
      children: 0
    }
  }

  getReviews(cb) {
    $.ajax({
      url: 'http://reviews.qr34qnsvtn.us-east-2.elasticbeanstalk.com/reviews',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        cb(data)
      },
      error: (err) => {
        throw new Error(err);
      }
    })
  }

  componentDidMount() {
    this.getReviews( (reviews) => {
      this.setState({
        allReviews: reviews.sort(function(a,b) {
          if (a.numDaysAgo > b.numDaysAgo) {
            return 1
          } else {
            return -1
          }
        })
      })
    })
  }

  countChildren() {
    this.setState({
      children: this.children++
    });
  }

  render() {
    let numChildren = 0;
    let sixReviews = this.state.allReviews.slice(0,6);
    return (
      <div className='appContainer'>
        <h1>Reviews</h1>
        <div className='allReviews'>
          {
            sixReviews.map((review) => (
              <Review key={review.id}
                      id={review.id}
                      name={review.name}
                      avatar={review.avatar}
                      reviewAge={review.numDaysAgo}
                      content={review.content}
                      allReviews={this.state.allReviews}
                      seeAllReviewsMode={false}
                      counter={numChildren++}
              />))
          }
        </div>
        <div>
          <AllReviewsLightBox allReviews={this.state.allReviews} showingAll={this.state.showingAll} />
        </div>
      </div>
    )
  }

}

module.exports = Reviews;