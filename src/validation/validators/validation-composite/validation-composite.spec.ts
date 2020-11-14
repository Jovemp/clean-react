import { FieldValidationSpy } from "../test/mock-field-validation"
import ValidationComposite from "./validation-composite"

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldDalidationSpy1 = new FieldValidationSpy('any_field')
    fieldDalidationSpy1.error = new Error('first_error_message')
    const fieldDalidationSpy2 = new FieldValidationSpy('any_field')
    fieldDalidationSpy2.error = new Error('second_error_message')
    const sut = new ValidationComposite([
      fieldDalidationSpy1,
      fieldDalidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
