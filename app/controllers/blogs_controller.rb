class BlogsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /blogs
  def index
    blogs = Blog.all
    render json: blogs
  end

  # POST /blogs
  def create
    blog = Blog.create(blog_params)
    render json: blog, status: :created
  end

  # GET /blogs/:id
  def show
    blog = find_blog
    render json: blog
  end

  # PATCH /blogs/:id
  def update
    blog = find_blog
    blog.update(blog_params)
    render json: blog
  end


  # DELETE /blogs/:id
  def destroy
    blog = find_blog
    blog.destroy
    head :no_content
  end

  private

  def find_blog
    Blog.find(params[:id])
  end

  def blog_params
    params.permit(:name, :species)
  end

  def render_not_found_response
    render json: { error: "Blog not found" }, status: :not_found
  end
end
