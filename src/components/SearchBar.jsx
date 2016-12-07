var SearchBar = (props) => (
  <div className="row">
   <form className="form" onSubmit={props.submit}>
     <div className="form-group form-group-lg">
       <label for="keyword"></label>
       <input type="text" className="form-control" id="keyword" placeholder={"Search for keywords in @" + props.userName + "'s tweets"} onChange={props.change}/>
     </div>
     <button className="btn btn-block btn-primary" type="submit">Search</button>
   </form>
  </div>
);
