import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>{"{JSON}"} Placeholder</h1>
    <br />
    <h3 style={{ fontWeight: 'lighter' }}>Free fake API for testing and prototyping.</h3>
    <h3 style={{ fontWeight: 'lighter' }}>Powered by<span>&nbsp;</span><Link to="/">
      JSON Server
    </Link> + <Link to="/">
        Low DB
    </Link></h3>
    <br />
    <Link to="todos" className="btn btn-primary btn-lg">
      Show Todos
    </Link>
  </div>
);

export default HomePage;
