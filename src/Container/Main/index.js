import React, { Component, useState } from 'react';
import './styles.scss'
import {render} from "react-dom";
import { jsPDF } from "jspdf";
import pogo from '../../images/pogo.png';
import ex from '../../images/ex.jpg';
import img3 from '../../images/picture3.png';
import logo from '../../images/logo.jpg';
import home from '../../images/home.jpg';
import next from '../../images/anext.png';
import previous from '../../images/aprevious.png';
//thirdpartycomponents
import { Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from "react-share";


export default class Slides extends Component{
    constructor(props){
        super(props);
        this.state=({
            imageNumber: 1
        })
    }
//const EncodeBase64 = () => {
  /*  const [selectedFile, setSelectedFile] = useState([]);
    const [fileBase64String, setFileBase64String] = useState("");

    const onFileChange = (e) =>{
        setSelectedFile(e.target.files);

        console.log(e.target.files[0]);
    };

    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;
                console.log(Base64);
                setFileBase64String(Base64);
            };
            reader.onerror = (error) => {
                console.log("error: ", error)
            }
        }
    }

    encodeFileBase64(selectedFile[0]);*/

    pdfGenerate=()=>{
        var doc = new jsPDF();

        if(this.state.imageNumber == 1){
        doc.addImage(ex,0,0);
        doc.save("Revenue.pdf");
        }
        else if(this.state.imageNumber == 2){
            doc.addImage(pogo,0,0);
            doc.save("Expenses.pdf");
        }
        else if(this.state.imageNumber == 3){
            doc.addImage(img3,15,0);
            doc.save("infograph.pdf");
        }
    }
   
    NextSlide = () => {
        if(this.state.imageNumber<3){
            this.setState({
                imageNumber: this.state.imageNumber+1
            })
        }
        else if(this.state.imageNumber==3){
            this.setState({
                imageNumber:1
            })
        }
    }

    PreviousSlide = () => {
        if(this.state.imageNumber<4 && this.state.imageNumber>1){
            this.setState({
                imageNumber: this.state.imageNumber-1
            })
        }
        else if(this.state.imageNumber==1){
            this.setState({
                imageNumber:3
            })
        }
    }

    analysisOne = () => {
        this.setState({
            imageNumber: 1
        })
    }
    analysisTwo = () => {
        this.setState({
            imageNumber: 2
        })
    }
    analysisThree = () => {
        this.setState({
            imageNumber: 3
        })
    }

    render(){
        return(
            <div className='home-page'>
                <div className='headd'>
                    <div className='head'>
                        <div className='header-banner-style'>  
                            <div className='header'>
                                <img src={logo} className='images'/>
                                
                                    <Link to='/' >
                                        <div className='right-icon'>
                                            <img src={home} className='image-icon'/>
                                            <h4 className='title'>Home</h4>
                                        </div>
                                    </Link>          
                            </div> 
                            <div className='top-buttons'>  
                                <button onClick={this.analysisOne} className={this.state.imageNumber === 1 ?
                                "top-button active" : "top-button"}>Analysis-Tab 1</button>   

                                <button onClick={this.analysisTwo} className={this.state.imageNumber === 2 ?
                                "top-button active" : "top-button"}>Analysis-Tab 2</button>    

                                <button onClick={this.analysisThree} className={this.state.imageNumber === 3 ?
                                "top-button active" : "top-button"}>Analysis-Tab 3</button>                       
                            </div>
                        </div>

                        <div className='buttons'>
                            <button onClick={this.pdfGenerate} className="create-pdf" >CREATE PDF</button>                    

                            <FacebookShareButton 
                                    url={"http://www.camperstribe.com"}
                                    quote={pogo}
                                    hashtag="#camperstribe"
                                    className='icons'>
                                    <FacebookIcon size={36} />
                            </FacebookShareButton>
                            
                        </div>
                        <div className='body-content'>
                            <div className='graphs'>                            
                                <button onClick={this.PreviousSlide} className='arrow-button'>
                                    <img src={previous} className='arrow' />
                                </button>

                                    {this.state.imageNumber == 1 ?
                                        <img src={ex} alt='pogo' className='graph-image'/> : [
                                            this.state.imageNumber == 2 ?
                                                <img src={pogo} alt='pogo' className='graph-image'/> :
                                                    [this.state.imageNumber == 3 ? 
                                                        <img src={img3} alt='pogo' className='graph-image'/>
                                                        : null
                                                    ]
                                        ]
                                    }

                                <button onClick={this.NextSlide} className='arrow-button'>
                                    <img src={next} className='arrow' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>  
        );
        }
    };


