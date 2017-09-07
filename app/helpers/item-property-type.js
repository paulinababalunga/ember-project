import Ember from 'ember';

const propertyType = [
  'Romance',
  'Psychology',
  'Drama',
  'SF'
];

export function itemPropertyType([propertyType]) {
  if(propertyType.includes(propertyType)) {
    return 'Community'
  }
  return 'Standalone'
}

export default Ember.Helper.helper(itemPropertyType);
