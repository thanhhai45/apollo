Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi/ do
    get '/' => 'home#index'
    get '/index' => 'home#index'
    get '/service' => 'home#service'
    get '/proceduce' => 'home#proceduce'
    get '/project' => 'home#project'
    get '/blogs' => 'home#blogs'
    get '/blog/:id' => 'home#blog_detail'
    get '/contact' => 'home#contact'
    get '/recruit' => 'home#recruit'
    get '/about-us' => 'home#about'
  end
  resources :demos
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
