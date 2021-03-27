import React, { Component } from 'react';  
import { Container, Typography, Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

 
export class MainPage extends Component {  
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {  
        return (  
            <div>  
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            {/* <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div> */}
        </nav>
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Online Store</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">Welcom to my shopping site. This website is developed for learning purpose. Feel free to play with it!</p>
                        <Button component={Link} to="/products" size="large" type="button" variant="contained" color="primary">Go Shopping!</Button>
                    </div>
                </div>
            </div>
        </header>
     
       
   
       
            </div>  
        )  
    }  
}  
  
export default MainPage  