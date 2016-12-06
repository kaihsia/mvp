var TweetList = (props) => {
  // console.log('tweets', props.tweets);
  return (
    <div className="container">
      <div className="row">
        <ul>
          { props.tweets.map( (tweet) => <Tweet tweet={tweet.text} /> ) }
        </ul>
      </div>
    </div>
  );
};
