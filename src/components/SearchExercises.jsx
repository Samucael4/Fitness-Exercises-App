import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>
            <TextField
                height="76px"
                sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                value=''
                onChange={(e) => { }}
                placeholder="Search Exercises"
                type="text"
            />
        </Stack>
    )
}

export default SearchExercises