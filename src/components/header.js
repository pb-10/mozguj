import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { Link } from "gatsby"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import styled from "styled-components"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 100,
  },
  title: {
    flexGrow: 10,
  },
}))

const StyledButton = styled.button`
  border-radius: 25px;
  border: 0;
  padding: 5px 15px;
  text-transform: "capitalize";
  font-size: 10px;
  ${props => {
    if (props.home) return `color:black; background: white;`
    else return `color:black; background:white;`
  }}
`

const ListButton = props => {
  const { primary, to } = props
  return (
    <ListItem button component={Link} to={to}>
      <ListItemText primary={primary} />
    </ListItem>
  )
}

class Header extends React.Component {
  state = {
    open: false,
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const { classes } = this.props

    const drawer = (
      <div>
        <List>
          <ListButton to="/" primary={"home"} />
          <ListButton to="/" primary={"about"} />
          <ListButton to="/" primary={"FAQ"} />
          <ListButton to="/" primary={"events"} />
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" className="app-bar" color="inherit">
          <Toolbar style={{ zIndex: 500 }}>
            <Typography className={classes.title} style={{ flexGrow: 10 }}>
              Mozilla Gujarat
            </Typography>
            <Hidden smDown>
              <Button component={Link} className="button-text-class">
                <Link to="/">
                  <Typography>home</Typography>
                </Link>
              </Button>
              <Button component={Link} className="button-text-class">
                <Link to="/about">
                  <Typography>about</Typography>
                </Link>
              </Button>
              <Button component={Link} className="button-text-class">
                <Link to="/faq">
                  <Typography>FAQ</Typography>
                </Link>
              </Button>
              <Button component={Link} className="button-text-class">
                <Link to="/">
                  <Typography>events</Typography>
                </Link>
              </Button>
              <StyledButton
                className="margin-space"
                onClick={() => console.log("clicked")}
              >
                <Typography>Get Started</Typography>
              </StyledButton>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="#000"
                aria-label="Open drawer"
                onClick={open ? this.handleDrawerClose : this.handleDrawerOpen}
              >
                <Icon path={mdiMenu} color="black" size={1}></Icon>
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden smUp implementation="css">
          <Drawer
            variant="persistent"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open={open}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

const drawerWidth = 240

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    [theme.breakpoints.down("sm")]: {
      width: 150,
      flexShrink: 0,
    },
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.down("sm")]: {
      width: 150,
      flexShrink: 0,
    },
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
})

export default withStyles(styles, { withTheme: true })(Header)
