class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      query: '',
      info: '',
      notFound: ''
    };
  }

  //GET request
  componentDidMount() {
    this.getInfo('/info');
  }
  getInfo(url) {
    this.props.getInfo(url, (info) => {
      console.log(info);
      this.setState({
        info: info
      });
    });
  }


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
      // console.log(dat);
      if (dat.length === 0) {
        this.setState({
          notFound: 'No Tweets about that. Sorry :(',
          tweets: []
        });
      } else {
        this.setState({
          tweets: dat,
          notFound:''
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <center>
          <h1>The @$#% THAT @{this.state.info.user_name} SAYS</h1>
          <img src={this.state.info.profile_image_url} className="img-responsive" alt="profile" />
          <SearchBar userName={this.state.info.user_name} query={this.state.query} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>
          <TweetList notFound={this.state.notFound} userName={this.state.info.user_name} tweets={this.state.tweets}/>
        </center>
      </div>
    );
  }
}

window.App = App;
