// components/MyLayout.js

import Link from 'next/link';
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = () => {
  return (
    <div style={layoutStyle}>
      <Link href = '/'>
        Home
    </Link>
    <Link href = '/about'>
        About
    </Link>
    </div>
  );
};

export default withLayout;