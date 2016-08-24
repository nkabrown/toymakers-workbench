const React = require('react');
const ReactDOM = require('react-dom'); 

var Greeting = React.createClass({
  render: function() {
    return (
      <div className="content">
        <h1>HI</h1>
        <GreetingForm />
      </div>
    );
  }  
});

var GreetingForm = React.createClass({
  getInitialState: function() {
    return { value: '' };
  },
  handleNameChange: function(e) {
    this.setState({ value: e.target.value });
  },
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name
    e.target.value = '';
    this.setState({ value: '' });
    return;
  },
  render: function() {
    return (
      <form id="name" autoComplete="off" onSubmit={this.onFormSubmit}>
        <p>What's your name?</p>
        <input type="text" placeholder="Name" id="name" value={this.state.value} onChange={this.handleNameChange} />
        <input type="submit" form="name" value="Clear" />
        <Salutation data={this.state.value}/>
      </form> 
    );
  }
});

var Salutation = React.createClass({
  render: function() {
    const name = this.props.data;
    return (
      this.props.data ?  <p className="greetings">Well, {this.props.data} nice to meet you!</p> : null
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('mount')
);
