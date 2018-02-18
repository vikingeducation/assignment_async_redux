class GreadsController < ApplicationController

  def index
    key = Rails.application.secrets.goodreads_api_key
    query = params[:q]
    page = params[:page] || 1
    @greads = HTTParty.get("https://www.goodreads.com/search/index.xml?key=#{key}&q=#{query}&page=#{page}")
    render json: @greads, status: :ok
  end

  def show
    key = Rails.application.secrets.goodreads_api_key
    id = params[:id]
    @greads = HTTParty.get("https://www.goodreads.com/book/show.xml?key=#{key}&id=#{id}&format=json")
    render json: @greads, status: :ok
  end

end
