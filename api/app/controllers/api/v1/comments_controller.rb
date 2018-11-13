# frozen_string_literal: true

module Api
  module V1
    # This controller is resposible for comments functionality
    class CommentsController < ApplicationController
      def show
        @comments = Comment.where(
          commentable_id: comment_params[:commentable_id],
          commentable_type: comment_params[:commentable_type]
        )
      end

      def create
        @comment = Comment.create(comment_params)
        CommentableChannel.broadcast_to(@comment.commentable,
                                        comment: @comment)
      end

      private

      def comment_params
        params.require(:comment).permit(
          :author, :content, :commentable_id, :commentable_type
        )
      end
    end
  end
end
