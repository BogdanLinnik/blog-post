import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const NoPosts = () => {
  return (
    <Card className="noData">
      <CardContent >
        <Typography variant="h2">
          No comments
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoPosts;
