import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
          <Footer.Wrapper>
            <Footer.Row>
                
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                   <p>Expery is a platform which facilitate the conctact 
                       between entreprnors and experts in digital fields.</p>
                   
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <dl>
                        <dd>Web Development</dd>
                        <dd>Mobile Development</dd>
                        <dd>Digital Marketing</dd>
                        <dd>IT</dd>
                        <dd>iOT</dd>
                    </dl>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                     <dl>
                         <dd><Icon className="fas fa-phone-alt" />xxxxxxxxx</dd>
                         <dd><Icon className="far fa-envelope" />xxxxxxxxx</dd>
                     </dl>  
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
         
            <div className="copyright">
                <p><Icon className="far fa-copyright" />Copyright Expery 2021, All rights reserved</p>  
            </div> 
        </Footer>
    )
}