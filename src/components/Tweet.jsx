var Tweet = (props) => {
  return (
    <div className="container">
      <div className="row">
        <li>
          <blockquote className="twitter-tweet">
            <p><a href={"https://twitter.com/" + props.userName + "/status/" + props.tweet.id_str}>{props.tweet.text}</a></p>
            <em>Tweeted on {moment(props.tweet.created_at).format("MMMM Do YYYY")}</em>
          </blockquote>
        </li>
      </div>
    </div>
  );
};
