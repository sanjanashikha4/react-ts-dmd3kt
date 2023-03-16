import * as React from 'react';
import './style.css';
import ResponsiveAppBar from './component/ResponsiveAppBar';
import SideBar from './component/SideBar';
export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SideBar />
    </div>
  );
}
