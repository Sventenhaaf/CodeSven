var SnippetItem = React.createClass({
  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    // debugger;
    return (
      <ul>
        <li>{title}:&nbsp;&nbsp;&nbsp;<span className="code">{body}</span></li>
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
