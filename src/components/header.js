import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { Link } from "gatsby"
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

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar" color="inherit">
        <Toolbar style={{ zIndex: 500 }}>
          <Typography className={classes.title}>Mozilla Gujarat</Typography>
          <Button component={Link} className="button-text-class">
            <Link to="/">
              <Typography>home</Typography>
            </Link>
          </Button>
          <Button component={Link} className="button-text-class">
            <Link to="/">
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
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
