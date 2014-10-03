class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :password, length: { minimum: 5, allow_nil: true }
  validates :username, uniqueness: true
  
  has_many :days
  has_many :bets
  
  attr_reader :password
  after_initialize :ensure_session_token
  
  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user.try(:is_password?, password) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end
  
  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
  def pending_wagers
    sum = 0
    self.bets.where(result: "pending").each do |bet|
      sum += bet.amount
    end
    sum
  end
  
  private
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
