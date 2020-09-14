import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  removeButton: {
    position: 'fixed',
    bottom: 20,
    left: 10,
    backgroundColor: 'rgba(255, 20, 20)',
    '&:hover': {
      backgroundColor: 'rgba(255, 20, 20, 0.7)',
    },
  },

}));

export default styles;
