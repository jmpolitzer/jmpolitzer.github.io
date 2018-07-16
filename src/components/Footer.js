import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import IoIosEmailOutline from 'react-icons/lib/io/ios-email-outline';
import IoSocialGithub from 'react-icons/lib/io/social-github';
import { print } from '../utils/colors';

const Container = styled.footer`
  display: flex;
  justify-content: space-around;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-around;
  width: 110px;
  margin-bottom: 50px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: ${print};
  border: 0;
  border-radius: 50%;
  padding: 10px 10px 10px ${(props) => props.github ? '12px' : '10px'};
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }

  a {
    display: inherit;
    color: white;
  }
`;

const Footer = ({ isMobile }) => (
  <Container>
    <Contacts>
      <Button data-tip data-for='mailto'><a href={'mailto:me@jaypolitzer.com'}><IoIosEmailOutline /></a></Button>
      <ReactTooltip disable={isMobile} id='mailto'>email me</ReactTooltip>
      <Button data-tip data-for='github' github='true'><a target="_blank" rel="noopener noreferrer" href={'https://github.com/jmpolitzer/jmpolitzer.github.io/tree/source'}><IoSocialGithub /></a></Button>
      <ReactTooltip disable={isMobile} id='github'>see the source code</ReactTooltip>
    </Contacts>
  </Container>
);

export default Footer;
