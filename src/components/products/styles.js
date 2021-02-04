import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    
  },
  root: {
    flexGrow: 1,
  },
  rootdetail: {
    maxWidth: '100%',
    flexGrow: 1,
    transform: 'scale(1.05)'
  },
  mediadetail: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },


}));