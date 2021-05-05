class EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]

  def index
    events = Event.order(date: :asc)
    render json: events
  end

  def show
    render json: @event
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render json: event.errors
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors
    end
  end

  def destroy
    if @event.destroy
      render json: @event
    else
      render json: @event.errors
    end
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(
      :name,
      :date,
      :prefecture_id,
      :address1,
      :address2,
      :description
    )
  end
end
