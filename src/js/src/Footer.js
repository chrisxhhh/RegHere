import React from "react";
import Container from "./Container";
import { Avatar, Button } from "antd";

import './Footer.css';

const Footer = (props) => (
    <div className='footer'>
        <Container>
            {props.numberOfPartcipants? 
                <Avatar 
                    style={{backgroundColor: '#f56a00', marginRight:'5px'}} 
                    size='large'>{props.numberOfPartcipants}
                </Avatar> : null}
            <Button onClick={()=> props.handleAddParticipantClickEvent()} type='primary'>{props.title}</Button>
        </Container>
    </div>
);

export default Footer;