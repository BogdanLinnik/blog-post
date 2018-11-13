import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import { deleteCategory } from '../../actions/categoryActions';

const CategoryCard = (props) => {
  return (
    <Card className="card">
      <CardHeader
        title={props.category.name}
        action={
          <div>
            <IconButton onClick={() => props.handleEdit()} aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => props.deleteCategory(props.category)} >
              <DeleteIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent >
        <Typography component="p" className="paragraph">
          {props.category.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => props.handleRedirect(`/categories/${props.category.id}`)}
            >
                Show posts
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

CategoryCard.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
}

export default connect(null, { deleteCategory })(CategoryCard)
