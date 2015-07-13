class TextBooksController < ApplicationController
  #教材控制器
  before_action :set_text_book, only: [:show, :edit, :update, :destroy]

  # GET /text_books
  # GET /text_books.json
  def index
    @text_books = TextBook.all
  end

  # GET /text_books/1
  # GET /text_books/1.json
  def show
  end

  # GET /text_books/new
  def new
    @text_book = TextBook.new
  end

  # GET /text_books/1/edit
  def edit
  end

  # POST /text_books
  # POST /text_books.json
  def create
    @text_book = TextBook.new(text_book_params)

    respond_to do |format|
      if @text_book.save
        format.html { redirect_to @text_book, notice: 'Text book was successfully created.' }
        format.json { render :show, status: :created, location: @text_book }
      else
        format.html { render :new }
        format.json { render json: @text_book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /text_books/1
  # PATCH/PUT /text_books/1.json
  def update
    respond_to do |format|
      if @text_book.update(text_book_params)
        format.html { redirect_to @text_book, notice: 'Text book was successfully updated.' }
        format.json { render :show, status: :ok, location: @text_book }
      else
        format.html { render :edit }
        format.json { render json: @text_book.errors, status: :unprocessable_entity }
      end
    end
  end
#1111
  # DELETE /text_books/1
  # DELETE /text_books/1.json
  def destroy
    @text_book.destroy
    respond_to do |format|
      format.html { redirect_to text_books_url, notice: 'Text book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_text_book
      @text_book = TextBook.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def text_book_params
      params.require(:text_book).permit(:name)
    end
end
