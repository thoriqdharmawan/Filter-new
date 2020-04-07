import React from 'react';
import { Paper, FormControl, InputLabel, OutlinedInput, InputAdornment, Typography, Checkbox } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Styles = {
  kanan: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f7f8f9',
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    backgroundColor: '#fff'
  },
  wrapper: {
    margin: '16px 0px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  all: {
    fontWeight: '500',
    color: '#000',
    fontSize: 14,
  },
  reset: {
    color: '#a9a8a8',
    fontSize: 10
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}


const Kanan = () => {
  return (
    <Paper style={Styles.kanan}>
       <FormControl style={Styles.input} fullWidth variant="outlined">
         <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}            
          />
        </FormControl>
        <div style={Styles.wrapper}>
          <Typography style={Styles.all}>Select All</Typography>
          <Typography style={Styles.reset}>Reset</Typography>
        </div>
        <div>
          <div style={Styles.items}>
            <Checkbox/>
            <Typography>180 Survey</Typography>
          </div>
          <div style={Styles.items}>
            <Checkbox/>
            <Typography>360 Survey</Typography>
          </div>
        </div>
    </Paper>
  )
}

export default Kanan