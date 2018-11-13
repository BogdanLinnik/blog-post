# frozen_string_literal: true

# This is channel for commentables
class CommentableChannel < ApplicationCable::Channel
  def subscribed
    stream_from "comment_#{params[:commentable]}_#{params[:id]}_channel"
  end

  def unsubscribed; end
end
