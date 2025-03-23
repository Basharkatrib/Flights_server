import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface GroupGrouplink extends Struct.ComponentSchema {
  collectionName: 'components_group_grouplinks';
  info: {
    displayName: 'grouplink';
    icon: 'apps';
  };
  attributes: {
    group: Schema.Attribute.Component<'link.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    icon: 'apps';
  };
  attributes: {
    src: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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
      'button.button': ButtonButton;
      'group.grouplink': GroupGrouplink;
      'link.link': LinkLink;
      'trips.dests': TripsDests;
    }
  }
}
