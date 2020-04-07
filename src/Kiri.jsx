import React, {useState} from 'react'
import { Paper, Button, Typography, Divider } from '@material-ui/core'

const Styles = {
  kiri: {
    width: '100%',
    padding: '20px 0px 0px 0px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    position: 'relative',
    zIndex: 4,
  },
  badge: {
    backgroundColor: '#014a62',
    padding: '0px 2px',
    borderRadius: '10px',
    width: 20,
    color: '#fff',
    fontSize: 'inherit'
  },
  button: {
    padding: '10px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12
  },
  activeButton: {
    padding: '10px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12,
    backgroundColor: '#014a62'
  },
  name: {
    fontSize: 'inherit',
    fontWeight: '600'
  },
  activeName: {
    fontSize: 'inherit',
    fontWeight: '600',
    color: '#fff',
  },
  activeBadge: {
    backgroundColor: '#fff',
    color: '#014a62',
    padding: '0px 2px',
    borderRadius: '10px',
    width: 20,
    fontSize: 'inherit'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  wrapperAction: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12,
    alignItems: 'center',
    padding: '10px 12px'
  },
  wrapperApply: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 12
  },
  cancel: {
    color: '#a9a8a8',
    fontSize: 'inherit'
  },
  apply: {
    color: '#039be5',
    fontSize: 'inherit',
    marginLeft: 10
  },
  reset: {
    fontSize: 'inherit',
    color: '#000'
  },
}

const Kiri = () => {
  const [active, setActive] = useState(false)
  return (
    <Paper style={Styles.kiri}>
      <div style={Styles.wrapper}>
        <Button style={active ? Styles.activeButton : Styles.button} onClick={() => setActive(!active)}>
          <Typography style={active ? Styles.activeName : Styles.name}>
            Survey Type
          </Typography>
          <div style={active ? Styles.activeBadge : Styles.badge}>1</div>
        </Button>
      </div>
      <div style={Styles.footer}>
        <Divider />
        <div style={Styles.wrapperAction}>
          <Typography style={Styles.reset}>Reset All</Typography>
          <div style={Styles.wrapperApply}>
            <Typography style={Styles.cancel}>Cancel</Typography>
            <Typography style={Styles.apply}>Apply</Typography>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default Kiri