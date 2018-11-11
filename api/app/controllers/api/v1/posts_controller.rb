# frozen_string_literal: true

module Api
  module V1
    # This controller is resposible for categories functionality
    class PostsController < ApplicationController
      before_action :post, except: %i[create]

      def create
        @post = Post.create(post_params)
        render 'show'
      end

      def update
        @post.update_attributes(post_params)
        render 'show'
      end

      def destroy
        @post.destroy
      end

      private

      def post
        @post = Post.find(params[:id])
      end

      def post_params
        params.permit(:id, :name, :content, :category_id, :file)
      end
    end
  end
end
