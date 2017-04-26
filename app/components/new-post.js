import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        snippet: this.get('snippet'),
        content: this.get('content'),
        image: this.get('image')
      }
      this.sendAction('savePost', params);
    }
  }
});
