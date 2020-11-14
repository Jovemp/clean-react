import { InvalidFieldError } from "@/validation/errors"
import { FieldValidation } from "@/validation/protocols"

export default class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: string): Error {
    return new InvalidFieldError(this.field)
  }
}
