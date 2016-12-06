var SearchBar = (props) => (
   <div className="container">
     <div className="row">
       <form onSubmit={props.submit}>
         <h3>Type in the keyword you want Trump to talk about</h3>
         <input type="text" placeholder="Search..." onChange={props.change}/>
         <button type="submit" onClick={props.click}>Search</button>
       </form>
     </div>
   </div>
);
