import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import { Link } from 'react-router-dom';
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                          
                         <div className='container-fluid' style={{'display':"flex", 'justifyContent':"space-around"}} >  
                         <Carousel style={{'height':"63vh", 'width':"110vh"}}>  
                         <Carousel.Item style={{'height':"63vh"}} >  
                         <img style={{'height':"63vh"}}  
                         className="d-block w-100"  
                        src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/7691ef6c6f2896705fc54cdd14a33107/33.jpg"
                        alt=""
                        />  
                           <Carousel.Caption>  
                           <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"63vh"}}>  
                                 <img style={{'height':"63vh"}}  
                                   className="d-block w-100"  
                                    src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/376b9e84256dc703a1c682f91530fcdc/28.jpg"    
                                    alt=""
                                    />  
                                       <Carousel.Caption>  
                                       <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"63vh"}}>  
                                       <img style={{'height':"63vh"}}  
                                        className="d-block w-100"  
                                         src="https://trello-attachments.s3.amazonaws.com/5ee19ed8ed7850157b41932f/700x485/e6b86f7711d340fec594b85e34d76e5e/4.jpg"   
                                         alt=""
                                         />  
                                        <Carousel.Caption>  
                                        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel  