var Button = React.createClass({
  getInitialState: function() {
    return {
      condition: false
    }
  },
  handleClick: function() {
    this.setState({
      condition: !this.state.condition
    });
  },
  render: function() {
    return (
      <div
        onClick={ this.handleClick }
        className= { this.state.condition ? "button toggled" : "button" }
      >
        { this.props.message }
      </div>
    )
  }
});

ReactDOM.render(<Button message="Click me if you dare!" />, document.getElementById('app'));
