# frozen_string_literal: true

if post.file.attachment
  json.file_url url_for(post.file)
  json.file_name post.file.attachment.blob.filename
end
