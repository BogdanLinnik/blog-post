import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const PostFile = (props) => {
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

PostFile.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostFile
