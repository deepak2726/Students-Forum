class PagesController < ApplicationController
  layout "page" 
  def index
    render :layout=>"application"
  end

  def services
    @title="Services"
  end

  def about_us
    @title="About Us"
  end

  def contact_us
    @title="Contact Us"
  end

  def blog

  end

  def team
    @title="Team"
  end

  def testimonials
    @title="Testimonials"
  end

  def thank_you
    @title="Thank You"
    Visitor.create(params[:visitor])
  end

end
