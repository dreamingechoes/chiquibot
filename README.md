Chiquibot
================

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This application was generated with the [rails_apps_composer](https://github.com/RailsApps/rails_apps_composer) gem
provided by the [RailsApps Project](http://railsapps.github.io/).

Rails Composer is open source and supported by subscribers. Please join RailsApps to support development of Rails Composer.

Ruby on Rails
-------------

This application requires:

- Ruby 2.2.2
- Rails 4.2.4

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

About
-----

This is an example of a conversational bot on **Ruby on Rails**. Was created with **Rails Composer** from the RailsApps project.

If you want to know more about the guy who's inspired this bot, you can check his [Wikipedia](https://en.wikipedia.org/wiki/Chiquito_de_la_Calzada) entry or search some videos on Youtube. Enjoy it! :D

Original author
---------------

Iván González, *a.k.a* [dreamingechoes](https://github.com/dreamingechoes)

Getting Started
---------------

To start using this bot, you only have to do the typical ***Rails*** things:

* Install ***Ruby*** version 2.2.2 (using [RVM](https://github.com/rvm/rvm) or [RBenv](https://github.com/sstephenson/rbenv) or whatever).

* Clone the repo and do the ***bundle install*** thing:

```sh
user@computer:~$ git clone git@github.com:dreamingechoes/chiquibot.git
user@computer:~$ cd chiquibot
user@computer:/chiquibot$ bundle install
user@computer:/chiquibot$ rake db:setup
```

* When all this finish, you're ready to launch the app!

```sh
user@computer:/chiquibot$ rails s
```

* Open your web browser and go to [http://localhost:3000](http://localhost:3000) like in all the regular ***Rails*** apps.

*Note: please, try only talk to Chiquito in Spanish, ¡pecador de la pradera! :)*

Usage
-------------------------

If you want to customize the bot, you only have to modify the `lib/chiquibot/chiquibot.aiml` or add more `.aiml` files on this folder to raise the variety of bot responses.

Contributing
------------

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

License
-------

**Chiquibot** is released under the [MIT License](http://www.opensource.org/licenses/MIT).
