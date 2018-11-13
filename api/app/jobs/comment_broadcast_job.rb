# frozen_string_literal: true

# This is job for sending new comments to channel members
class CommentBroadcastJob < ApplicationJob
  queue_as :default

  def perform(commentable, comment)
    ActionCable.server.broadcast(
      "comment_#{commentable.class.name}_#{commentable.id}_channel",
      comment: render_message(comment)
    )
  end

  private

  def render_message(message)
    ApplicationController.renderer.render(
      partial: 'api/v1/comments/comment',
      locals: { comment: message }
    )
  end
end
