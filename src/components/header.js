import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SiteHeader = styled.header`
  background-color: #192027;
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  box-sizing: border-box;
  z-index: 9999;
  @media print {
    display: none;
  }
`;
const SiteName = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  padding: 0 4rem;
  line-height: 6rem;
  letter-spacing: 1px;
  font-weight: 700;
  span {
    color: #ffffff;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <SiteName>
      <span>{siteTitle}</span>
    </SiteName>
  </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}
export default Header
