interface ImageObject {
  data: ImageObjectDetails
};

interface ImageObjectDetails {
  attributes: ImageObjectAttributes,
  id: number
};

interface ImageObjectAttributes {
  alternativeText: string,
  caption: string,
  createdAt:  string,
  ext: string,
  format: ImagebjectAttrFormat,
  hash: string,
  height: number,
  mime: string,
  name: string,
  previewUrl: string|null|undefined,
  provider: string,
  provider_metadata: unknown|null|undefined,
  size: number,
  updatedAt: string,
  url: string,
  width: number
};

interface ImageFormatObject {
  ext: string,
  hash: string,
  height: number,
  mime: string,
  name: string,
  path: unknown|null|undefined,
  size: number,
  url: string,
  width: number
};

interface ImagebjectAttrFormat {
  large: ImageFormatObject,
  medium: ImageFormatObject,
  small: ImageFormatObject,
  thumbnai: ImageFormatObject
};

export { ImageObject, ImageObjectDetails, ImageObjectAttributes, ImageFormatObject, ImagebjectAttrFormat };