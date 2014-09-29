window.Superbook.Collections.Users = Backbone.Collection.extend({
  model: Superbook.Models.User,
  url: 'api/users',
  
  getOrFetch: function (id) {
    var user = this.get(id);

    if(!user) {
      user = new Superbook.Models.User({ id: id });
      user.fetch({
        success: function () {
          this.add(user);
        }.bind(this)
      });
    } else {
      user.fetch();
    }

    return user;
  }
});

Superbook.Collections.users = new Superbook.Collections.Users();