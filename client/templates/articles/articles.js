Template.articles.helpers({
  isBio: function() {
    return this.type === 'bio'
  },
  isShow: function() {
    return this.type === 'show'
  }
});