import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import PixelBlast from '../src/components/PixelBlast';
import Ctaone from './components/Ctaone';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='fixed top-0 left-0 w-full h-full -z-10 bg-gray-900' />
    <Navbar />
    <div>
      <div style={{ width: '100%', height: '600px', position: 'relative', zIndex: 0 }}>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div className='relative z-10'>
        <Ctaone />
      </div>
    </div>
  </StrictMode>,
)
