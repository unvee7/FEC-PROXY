const $ = require('jquery');

const contentTests = {
  getReviews: (cb) => {
    $.ajax({
      url: '/reviews',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        cb(data)
      },
      error: (err) => {
        throw new Error(err);
      }
    })
  },
  getDaysOld: (data) => {
    this.getReviews( data => {
      return data.map( item => {
        return item.numDaysAgo;
      })
    })
  }
}

// const getReviews = (cb) => {
//   $.ajax({
//     url: '/reviews',
//     type: 'GET',
//     dataType: 'json',
//     success: (data) => {
//       cb(data)
//     },
//     error: (err) => {
//       throw new Error(err);
//     }
//   })
// }

// const getDaysOld = getReviews( data => {
//   return data.map( item => {
//     return item.numDaysAgo;
//   })
// })

console.log(contentTests.getDaysOld());
module.exports = contentTests;