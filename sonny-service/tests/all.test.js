import React from 'react';
import Review from '../client/components/Review.jsx';
import Reviews from '../client/components/Reviews.jsx';
import AllReviews from '../client/components/allReviews.jsx';
import Search from '../client/components/Search.jsx';

// const Review = require('../client/components/Review.jsx');
// const Reviews = require('../client/components/Reviews.jsx');
// const React = require('react');

// Declare all react components
let reviews;
let review;
let allReviews;
let search;

beforeEach(() => {
  reviews = shallow(<Reviews /> );
  review = shallow(<Review /> );
  allReviews = shallow(<AllReviews /> );
  search = shallow(<Search /> );
});

describe('<Reviews /> ', () => {

  it('should exist ', () => {
    expect(reviews.exists()).toBe(true);
  })

  // it('should render 6 reviews', () => {
  //   expect(reviews.find('Review')).to.have.lengthOf(6);
  // });

  // it('should display a userName', () => {
  //   expect(reviews.find('header')).toHaveLength(1);
  // });

  // it('should have a number of days old ', () => {
  //   expect(reviews.find(Review).props().reviewAge).not.toBeNaN();
  // });

});

// describe('<Review />', () => {
//   it('should exist', () => {
//     expect(review.exists()).toBe(true);
//   });

//   it('should')
// })