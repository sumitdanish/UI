import DS from 'ember-data';
const {
  Model,
  attr
} = DS;
export default DS.Model.extend({
  userId : attr('string'),
  password:attr('string')
});
