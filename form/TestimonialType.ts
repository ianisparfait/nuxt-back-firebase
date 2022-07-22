const TestimonialType = {
  "names": {
    "singularName": "testimonial",
    "pluralName": "testimonials",
    "displayName": "Testimonial"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginsOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "username": {
      "type": "string",
      "required": true,
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "jobtitle": {
      "type": "string",
      "required": false,
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "message": {
      "type": "richtext",
      "required": true,
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "userImage": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": [
        "images"
      ],
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "companyLogo": {
      "type": "media",
      "multiple": false,
      "required": true,
      "allowedTypes": [
        "images"
      ],
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    }
  }
};

export default TestimonialType;