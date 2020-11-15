import { FieldValidation } from "@/validation/protocols"
import { EmailValidation, RequiredFieldValidation, MinLengthValidation } from "@/validation/validators"

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly valitaions: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.valitaions.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.valitaions.push(new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuilder {
    this.valitaions.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  build (): FieldValidation[] {
    return this.valitaions
  }
}
