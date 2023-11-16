import type { Schema, Attribute } from '@strapi/strapi';

export interface RestaurantinfoOpenningHours extends Schema.Component {
  collectionName: 'components_restaurantinfo_openning_hours';
  info: {
    displayName: 'Openning Hours';
    icon: 'restaurant';
    description: '';
  };
  attributes: {
    hours: Attribute.String;
    days: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'restaurantinfo.openning-hours': RestaurantinfoOpenningHours;
    }
  }
}
