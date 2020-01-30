// components/MyLayout.js

import Header from '../components/Header';
import Link from 'next/link';

const layoutStyle = {
  margin: 20,
  padding: 20,
  spacing: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Link href = '/'>
        Home
    </Link>
    <Link href = '/about'>
        About
    </Link>
    {props.children}
  </div>
);

export default Layout;