import { FieldValidation } from "@/validation/protocols"
import { RequiredFieldValidation } from "@/validation/validators"

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

  build (): FieldValidation[] {
    return this.valitaions
  }
}
