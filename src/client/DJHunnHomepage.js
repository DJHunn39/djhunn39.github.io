import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DJHunn39Logo from '../../assets/DJHunn39SigRedTransparent0.png';
import theme from './styles/theme';
import Home from './components/Home';
import GiftList from './components/GiftList';

const DJHunnHomepage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position='relative'>
          <Toolbar>
            <img src={DJHunn39Logo} height={50} width={150}/>
          </Toolbar>
        </AppBar>
        <Container maxWidth='lg'>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/bday-xmas-2019">
                <GiftList />
              </Route>
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </React.Fragment>
    )
}

export default DJHunnHomepage;
