var React    = require('react');
var ListItem = require('./Listitem.jsx');

var ingredients = [
  {
  "id":1,
  "text":"ham"
  },
  {
  "id":2,
  "text":"cheese"
  },
  {
  "id":3,
  "text":"sabji"
  },
];

var List = React.createClass({
    render: function() {
      /*It allows us to iterate over a collection and then take each item in that
      collection and do some type of transformation on it and then return back a
      transformed item , may be some particular property of a object or result of
      a mathematical calculator but all of those return value for each item then get populated into a new array.
      So the map function is usefull in transferming collection of data*/
      var listItems = ingredients.map(function(item) {
          return <ListItem key={item.id} ingredient= {item.text} />;
      });

      return (<ul>{listItems}</ul>)
    }
});

module.exports = List;
