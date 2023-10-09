import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft += 100; 
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft -= 100; 
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleMouseWheel);

    return () => {
      container.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} ref={containerRef}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ display: 'inline-block' }}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
      <div style={{ display: 'inline-block' }}>
        <Typography onClick={scrollLeft} className="left-arrow">
          <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Typography onClick={scrollRight} className="right-arrow">
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
