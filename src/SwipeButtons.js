import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarRateIcon from '@mui/icons-material/StarRate';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='muiIconButton_root swipeButtons_repeat'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='muiIconButton_root swipeButtons_left'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='muiIconButton_root swipeButtons_fav'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='muiIconButton_root swipeButtons_like'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='muiIconButton_root swipeButtons_flash'>
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons