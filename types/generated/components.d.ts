import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedProperties extends Schema.Component {
  collectionName: 'components_shared_properties';
  info: {
    displayName: 'Properties';
    description: '';
  };
  attributes: {
    Key: Attribute.String & Attribute.Required;
    Value: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.properties': SharedProperties;
    }
  }
}
