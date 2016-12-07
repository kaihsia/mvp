var TweetList = (props) => {
  // console.log('tweets', props.tweets);
  return (
      <div className="row">
        <ul className="list-unstyled">
          { props.tweets.map( (tweet) => <Tweet tweet={tweet} userName={props.userName}/> ) }
        </ul>
        <h4>{props.notFound}</h4>
      </div>
  );
};
