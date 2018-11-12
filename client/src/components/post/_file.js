import React from 'react';
import Button from '@material-ui/core/Button';

const File = (props) => {
  return (
    <span>
      Download attached file:
      <a href={`http://localhost:3000${props.post.file_url}`} download='true'>
        <Button>
          {props.post.file_name}
        </Button>
      </a>
    </span>
  )
}

export default File;
