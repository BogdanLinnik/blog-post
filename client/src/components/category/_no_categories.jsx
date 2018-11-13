import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const NoCategories = () => {
  return (
    <Card className="noData">
      <CardContent >
        <Typography variant="h1">
          No Categories
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoCategories;
