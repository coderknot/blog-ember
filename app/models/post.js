import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  snippet: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
});
