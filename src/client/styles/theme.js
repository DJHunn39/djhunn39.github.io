import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: red,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
