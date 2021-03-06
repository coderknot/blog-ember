import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
      };
      debugger;
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
