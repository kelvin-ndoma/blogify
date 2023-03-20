class BlogsController < ApplicationController
  # GET /blogs
  def index
    blogs = Blog.all
    render json: blogs
  end

  # GET /blogs/:id
  def show
    blog = Blog.find_by(id: params[:id])
    render json: blog
  end

  # POST /blogs
  def create
    blog = Blog.create(blog_params)
    render json: blog, status: :created
  end

  # PUT /blogs/:id
  def update
    blog = Blog.find_by(id: params[:id])
    if blog
      blog.update(blog_params)
      render json: blog, status: :accepted
    else
      render json: { errors: "Blog not found" }, status: :not_found
    end
  end

  # DELETE /blogs/:id
  def destroy
    blog = Blog.find_by(id: params[:id])
    if blog
      blog.destroy
      head :no_content
    else
      render json: { error: "Blog not found" }, status: :not_found
    end
  end

  private

  def blog_params
    params.permit(:title, :description, :image, :author)
  end
end
