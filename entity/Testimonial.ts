import { ImageObject } from "~/interfaces/ImageObject";

class Testimonial {
  private id: number;
  private createdAt: string;
  private publishedAt: string;
  private updatedAt: string;
  private username: string;
  private jobtitle?: string;
  private message: string;
  private userImage?: ImageObject;
  private companyLogo: ImageObject;

  constructor({..._}) {
    this.id = _.id;
    this.createdAt = _.createdAt;
    this.publishedAt = _.publishedAt;
    this.updatedAt = _.updatedAt;
    this.username = _.username;
    this.jobtitle = _.jobtitle;
    this.message = _.message;
    this.userImage = _.userImage;
    this.companyLogo = _.companyLogo;
  };

  public getId(): number {
    return this.id;
  };
  public setId(value: number) {
    this.id = value;
  };

  public getCreatedAt(): string {
    return this.createdAt;
  };
  public setCreatedAt(value: string) {
    this.createdAt = value;
  };

  public getPublishedAt(): string {
    return this.publishedAt;
  };
  public setPublishedAt(value: string) {
    this.publishedAt = value;
  };

  public getUpdatedAt(): string {
    return this.updatedAt;
  };
  public setUpdatedAt(value: string) {
    this.updatedAt = value;
  };

  public getUsername(): string {
    return this.username;
  };
  public setUsername(value: string) {
    this.username = value;
  };

  public getJobtitle(): string | undefined {
    return this.jobtitle;
  };
  public setJobtitle(value: string | undefined) {
    this.jobtitle = value;
  };

  public getMessage(): string {
    return this.message;
  };
  public setMessage(value: string) {
    this.message = value;
  };

  public getUserImage(): ImageObject | undefined {
    return this.userImage;
  };
  public setUserImage(value: ImageObject | undefined) {
    this.userImage = value;
  };

  public getCompanyLogo(): ImageObject {
    return this.companyLogo;
  };
  public setCompanyLogo(value: ImageObject) {
    this.companyLogo = value;
  };
};

export default Testimonial;
