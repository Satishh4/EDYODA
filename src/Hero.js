import React from 'react';
import './Hero.css';
import Subscription from './Subscription';

const Hero = () => {
  return (
    <nav className="Hero">
        <div className='left'>
          <div>
          <h1 className='title'>
            Access curated courses worth ₹18,500at just ₹ 99 per year
          </h1>

            
            <div className='sub-title'> 
            <div className='row'>
              <img src={require('./Vector.png')} alt="Vector" style={{ width: '60px', height: '60px' }} />
              <p>
                <span style={{ color: '#0096FF' }}>100+</span> Jobs relevant courses
              </p>
            </div>
            <div className='row'>
              <img src={require('./Icon (3).png')} alt="Vector" style={{ width: '60px', height: '60px' }} />
              <p>
                <span style={{ color: '#0096FF' }}>20,000+</span> Jobs relevant courses
              </p>
            </div>
            <div className='row'>
              <img src={require('./Icon.png')} alt="Vector" style={{ width: '60px', height: '60px' }} />
              <p>
                <span style={{ color: '#0096FF' }}>Exclusive</span> Webinar Access
              </p>
            </div>
            <div className='row'>
              <img src={require('./Icon (1).png')} alt="Vector" style={{ width: '60px', height: '60px' }} />
              <p>
                Scholarship worth <span style={{ color: '#0096FF' }}>94,000</span>
              </p>
            </div>
            <div className='row'>
              <img src={require('./Icon (2).png')} alt="Vector" style={{ width: '60px', height: '60px' }} />
              <p>
                <span style={{ color: '#0096FF' }}>Ad free</span> learning Experience
              </p>
            </div>
            </div>
            </div>
        </div>
        <div className='right'>
            <Subscription/>
        </div>
    </nav>
  );
};

export default Hero;
