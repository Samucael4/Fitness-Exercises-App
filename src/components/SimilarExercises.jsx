import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import Loader from './Loader';

const styles = {
  horizontalMenuContainer: {
    overflowX: 'auto',
  },
  horizontalMenu: {
    display: 'flex',
  },
  horizontalMenuItem: {
    padding: '10px',
    marginRight: '10px',
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  horizontalMenuItemHover: {
    backgroundColor: '#ddd',
  },
};

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <div style={styles.horizontalMenuContainer}>
      <Stack direction="row" style={styles.horizontalMenu}>
        {targetMuscleExercises.length !== 0 ? (
          targetMuscleExercises.map((exercise, index) => (
            <div
              key={index}
              style={styles.horizontalMenuItem}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = styles.horizontalMenuItemHover.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = styles.horizontalMenuItem.backgroundColor;
              }}
            >
              {exercise.name}
            </div>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </div>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <div style={styles.horizontalMenuContainer}>
      <Stack direction="row" style={styles.horizontalMenu}>
        {equipmentExercises.length !== 0 ? (
          equipmentExercises.map((exercise, index) => (
            <div
              key={index}
              style={styles.horizontalMenuItem}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = styles.horizontalMenuItemHover.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = styles.horizontalMenuItem.backgroundColor;
              }}
            >
              {exercise.name}
            </div>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </div>
  </Box>
);

export default SimilarExercises;
