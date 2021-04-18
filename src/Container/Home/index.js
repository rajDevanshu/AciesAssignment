import React, { Component } from 'react'
import './styles.scss';
//logo
import logo from '../../images/logo.jpg';
import home from '../../images/home.jpg';
import logo2 from '../../images/logo2.jpg';
import mainImage from '../../images/main-image.png';
//thirdpartycomponents
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='headd'>
                    <div className='head'>
                        <div className='header-banner-style'>  
                            <div className='header'>
                                <img src={logo} className='images'/>

                                <div className='right-icon'>
                                    <img src={home} className='image-icon'/>
                                    <h4 className='title'>Home</h4>
                                </div>
                                
                            </div>
                        </div>

                        <div className='body-content'>

                            <div className='body-align'> 
                                    <div>
                                        <p className='tag-line'>PUTTING INNOVATION INTO WORK.</p>
                                        <div className='check'>
                                        <img src={logo2} className='images' />
                                        
                                        <div className='show-details'>
                                                <p className='quest'>Wanna See Last Month Deatils?</p>

                                                <Link to='/Dashboard' className='navigation' >
                                                    <p className='data'>Show</p>
                                                </Link>                                    
                                            </div>
                                            
                                        </div>
                                        
                                            <p className='description'>Information Technology and Service</p>

                                        
                                    </div>
                                <div>
                                    <img src={mainImage} className="main-images" />
                                </div>
                            </div>
                            
                        </div>
                    </div>                    
                </div>                
            </div>
        )
    }
}
