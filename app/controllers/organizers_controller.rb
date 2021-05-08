class OrganizersController < ApplicationController
  before_action :set_organizer, only: %i[show update destroy]

  def index
    organizers = Organizer.all
    render json: organizers
  end

  def show
    render json: @organizer
  end

  def create
    organizer = Organizer.new(organizer_params)
    if organizer.save
      render json: organizer
    else
      render json: organizer.errors
    end
  end

  def update
    if @organizer.update(organizer_params)
      render json: @organizer
    else
      render json: @organizer.errors
    end
  end

  def destroy
    if @organizer.destroy
      render json: @organizer
    else
      render json: @organizer.errors
    end
  end

  private

  def set_organizer
    @organizer = Organizer.find(params[:id])
  end

  def organizer_params
    params.require(:organizer).permit(
      :name,
      :en_name,
      :description,
      :prefecture_id,
      :address1,
      :address2,
      :hp_url,
      :email
    )
  end
end
