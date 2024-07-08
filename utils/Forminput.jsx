"use client"
import { Checkbox, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function Forminput({ label, formtype = "text", helperText, type="text" }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='mb-5 w-full'>
            {formtype === 'checkbox' &&
                <FormControlLabel control={<Checkbox />} label={label} />
            }
            {formtype === 'text' && <TextField success className='w-full' id="outlined-basic" label={label} variant="outlined" />}
            {formtype === 'textarea' && <TextField
                id="outlined-multiline-flexible"
                className='w-full'
                label={label}
                multiline
                maxRows={4}
            />}
            {formtype === 'select' && <TextField
                id="outlined-select-currency"
                select
                className='w-full'
                label={label}
                defaultValue="EUR"
                helperText={helperText}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>}
            {formtype === 'password' &&
                    <div className="relative">
                        <TextField 
                        type={showPassword ? 'text' : 'password'}
                        className='w-full' id="outlined-basic" label={label} variant="outlined" />
                        <div className="absolute top-1 right-2">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </div>
                </div>}
        </div>
    )
}
