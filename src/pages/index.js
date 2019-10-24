import React from 'react'
import { Grid, Box } from '../raster'
import '../scss/reset.scss'
import '../scss/index.scss'

import headerImage from "../images/header-bg.jpg"
import GitHub from "../components/github-logo"
import Select from 'react-select'

// import image2 from "../images/image-2.jpg"
// import image3 from "../images/image-3.jpg"
// import image4 from "../images/image-4.jpg"
// import image5 from "../images/image-5.jpg"

import logo from "../images/react-raster-logo.svg"

const gridProps = {
  colspan: 12,
  breakpoints: [0, 500, 768, 1024, 1200, 1400],
  left: '3vw',
  right: '3vw',
  gutterX: '1.5vw',
  gutterY: '3vw',
  control: true
}


export default () => {
  const [mode, setMode] = React.useState('grid')
  function onSelect({ value }) {
    setMode(value)
  }
  return (
    <>
      <nav className="topnav">
        <GitHub />
        <Select
          className="modeSelect"
          placeholder='CSS Grid Layout'
          options={[
            { label: 'CSS Grid Layout', value: 'grid', },
            { label: 'Flexbox', value: 'flex', },
          ]}
          onChange={onSelect}
        />
      </nav>
      <Grid
        tag='header'
        {...gridProps}
        alignY={'center'}
        alignX={'center'}
        cssMode={mode}
        key={mode + 'header'}
        style={`
        background-image: url(${headerImage});
        background-size: cover;
        background-position: center bottom;
        height: 66.666vh;
      `}
      >
        <Box
          className='Logo'
          cols={[10, 6, 4, 4, 3, 2]}
          tag='img'
          attrs={{
            src: logo,
            alt: "Logo"
          }}
        />
      </Grid >
      <Grid
        tag='section'
        {...gridProps}
        alignX={'center'}
        alignY={'center'}
        cssMode={mode}
        key={mode + 'section-1'}
        bottom='5vh'
        style={`
        min-height: 33.333vh;
      `}
      >
        <Box
          className='Box--1'
          cols={[12, 10, 8, 6]}
          style={`
          justify-content: center;
        `}
        >
          <h1><pre>react-raster</pre> is an advanced grid-system based on styled-components. <span role="img" aria-label="kissing cat">😽</span></h1>
        </Box>
        <Box
          className='Box--1'
          cols={[12, 10, 8, 12]}
          top={1}
          style={`
            justify-content: center;
          `}
        >
          <p>Scale your Viewport to see the layout changing!</p>
          <p>Press <span>ESC</span> to see the column-grid</p>
        </Box>
      </Grid>

    </>
  )
}