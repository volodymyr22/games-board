import { AbstractControl, ValidationErrors } from '@angular/forms';

export function scoreValueValidator(
  control: AbstractControl
): ValidationErrors | null {
  const valueArray = control?.value?.split('');

  if (valueArray) {
    if (valueArray.length > 2) {
      if (+(valueArray[1] + valueArray[2]) > 10) {
        return { incorrectValue: true };
      }
    }

    if (
      valueArray.length === 2 &&
      parseInt(valueArray[0]) > parseInt(valueArray[1])
    ) {
      return { incorrectValue: true };
    }
  }

  return null;
}
