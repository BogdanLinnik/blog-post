import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const NoPosts = () => {
  return (
    <Card className="noData">
      <CardContent >
        <Typography variant="h1">
          No posts
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoPosts;
