import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Popper from '@material-ui/core/Popper';
import { Paper } from "@material-ui/core";
import Kanan from './Kanan';
import Kiri from './Kiri';

const Styles = {
  paper : {
    width: 500,
    height: 300,
    display: 'flex',
    flexDirection: 'row',
  },
  kiri: {
    width: '100%'
  },
  kanan: {
    width: '100%'
  }
}

const Filter = () => {
  const [value, setValue] = React.useState([]);
  const [pendingValue, setPendingValue] = React.useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;
  
  
  console.log(open)
  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Hello World
      </Button>
      <Popper
        open={open}
        id={id}
        anchorEl={anchorEl}
        placement="bottom-start"
        onClose={handleClose}
      >
        <Paper style={Styles.paper}>
          <Kiri />
          <Kanan />
        </Paper>  
      </Popper>
    </div>
  )
}



export default Filter
