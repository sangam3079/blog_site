import React from 'react';
import { Link } from 'react-router-dom';


const home = () => (
    <div className='container'>
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Blog Site !!</h1>
            <p className="lead">we make all kinds of awesome blog</p>
            <hr className="my-4"/>
            <p>click the button below to check out blog</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check Out</Link>
        </div>
        
    </div>
    
);

export default home;