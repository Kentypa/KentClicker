import { FileValidator } from "@nestjs/common";

export interface CustomUploadTypeValidatorOptions {
  fileType: string[];
}

export class FileMimeTypeValidator extends FileValidator {
  private _allowedMimeTypes: string[];

  constructor(
    protected readonly validationOptions: CustomUploadTypeValidatorOptions,
  ) {
    super(validationOptions);
    this._allowedMimeTypes = this.validationOptions.fileType;
  }

  isValid(file?: Express.Multer.File): boolean | Promise<boolean> {
    if (!file) {
      return false;
    }

    return this._allowedMimeTypes.includes(file.mimetype);
  }

  public buildErrorMessage(): string {
    return `Upload not allowed. Upload only files of type: ${this._allowedMimeTypes.join(
      ", ",
    )}`;
  }
}
