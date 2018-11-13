# frozen_string_literal: true

class CommentableChannel < ApplicationCable::Channel
  def subscribed
    @commentable = params[:commentable].constantize.find(params[:id])
    stream_for @commentable
  end

  def unsubscribed; end
end
