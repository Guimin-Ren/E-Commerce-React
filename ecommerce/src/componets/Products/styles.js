import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundImage: `url(${'https://static.vecteezy.com/system/resources/previews/000/094/478/original/free-abstract-pattern-vector.jpg'})`,
  },
  
  
}));