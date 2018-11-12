# frozen_string_literal: true

module Api
  module V1
    # This controller is resposible for categories functionality
    class CategoriesController < ApplicationController
      before_action :category, except: %i[index create]
      helper_method :categories

      def create
        @category = Category.create(category_params)
      end

      def destroy
        @category.destroy
      end

      def update
        @category.update_attributes(category_params)
        render 'create'
      end

      private

      def category
        @category = Category.find(params[:id])
      end

      def categories
        @categories = Category.all.order(updated_at: :desc)
      end

      def category_params
        params.require(:category).permit(:id, :name, :description)
      end
    end
  end
end
