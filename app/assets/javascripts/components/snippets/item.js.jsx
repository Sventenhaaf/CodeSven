var Snippet = React.createClass({
  render: function (){
    var title = this.props.title;
    return (
      <ul>
        <li>Title: {title}</li>
        <li>Body: this.props.body</li>
      </ul>
    )
  }
})



// var Bench = React.createClass({
//   render: function () {
//     var reviews = this.props.bench.reviews || [];
//     var Link = ReactRouter.Link;
//     return (
//       <div>
//         <ul>
//           <img height="200px" src={this.props.bench.picture_url}/>
//           <li>Rating: {this.props.bench.average_rating || "No reviews yet"}</li>
//           <li>Description: {this.props.bench.description}</li>
//           <li>Seats: {this.props.bench.seating}</li>
//           <li>Latitude: {this.props.bench.lat}</li>
//           <li>Longitude: {this.props.bench.lng}</li>
//         </ul>
//         <div className="reviews">
//           <h3>Reviews</h3>
//          {reviews.map(function (review) {
//            return <Review {...review} />;
//          })}
//         </div>
//       </div>
//     );
//   }
// });
