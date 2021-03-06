import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '50%',
    },
    cartActions: {
        display: 'flex',
        justifyContent: 'space-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));