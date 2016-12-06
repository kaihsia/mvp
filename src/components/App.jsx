class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      query: ''
    };

  }

  // GET request
  // componentDidMount() {
  //   this.getTweet('/tweets');
  // }
  //
  // getTweet(url) {
  //   this.props.getTweets(url, (tweets) => {
  //     this.setState({
  //       tweets: tweets
  //     });
  //   });
  // }

  // handleClick(event) {
    // query.preventDefault();
    // this.props.postSearch('/search', this.state, (dat) => {
    //   console.log(dat);
    // });
  // }

  // POST request
  handleChange(event) {
    this.setState({
      query: event.target.value
    });
    // console.log('change', event.target.value);
  }

  handleSubmit(event) {
    // console.log('submit', event.target);
    event.preventDefault();

    var option = {
      query: this.state.query
    };
    // console.log('query', this.state.query);
    this.props.postSearch('/search', option, (dat) => {
      console.log(dat);
      this.setState({
        tweets: dat
      });
    });

  }

  // handleClick(e) {
  //   console.log('click', e.target.value);
  // }
  render() {
    return (
      <div className="container">
        <h1>The @$#% TRUMP SAYS</h1>
        <SearchBar query={this.state.query} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>
        <TweetList tweets={this.state.tweets}/>
      </div>
    );
  }
}

window.App = App;
