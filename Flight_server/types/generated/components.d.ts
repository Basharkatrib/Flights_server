import type { Schema, Struct } from '@strapi/strapi';

export interface TripsDests extends Struct.ComponentSchema {
  collectionName: 'components_trips_dests';
  info: {
    displayName: 'dests';
    icon: 'arrowRight';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    price: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'trips.dests': TripsDests;
    }
  }
}
