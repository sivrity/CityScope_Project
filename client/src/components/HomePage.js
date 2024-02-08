import React from 'react';
import Navbar from '../page_components/Navbar';
import Herosection from '../page_components/Herosection';
import Category from '../page_components/Category';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <Herosection /> 
    <Category />

    <div>HomePage</div>
    
    </>
  )
}