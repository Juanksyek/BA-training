const validateForm = formSelector => {
    const formElement = document.querySelector(formSelector);

    const allowedKeyP = ['allownames', 'allownumbers', 'allowalphanum', 'allowfloats'];

    const validationOptions = [
        {
          attribute: 'minlength',
          isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10),
          errorMessage: (input, placeholder) => `${placeholder} debe tener al menos ${input.minLength} caracteres`
        },
        {
          attribute: 'data-maxlength',
          isValid: input =>
              input.value && input.value.length <= parseInt(input.dataset.maxlength, 10),
          errorMessage: (input, placeholder) =>
              `${placeholder} debe contener menos de ${input.dataset.maxlength} caracteres`
        },
        {
          attribute: 'match',
          isValid: input => {
              const matchSelector = input.getAttribute('match');
              const matchedElement = formElement.querySelector(`#${matchSelector}`);
              return (
                  matchedElement && matchedElement.value.trim() === input.value.trim()
              );
          },
          errorMessage: (input, placeholder) => 'Las contraseñas no coinciden'
          
        },
        {
          attribute: 'pattern',
          isValid: input => {
              const patternRegex = new RegExp(input.pattern);
              return patternRegex.test(input.value);
          },
          errorMessage: (input, placeholder) => `${placeholder} no es válido`
          
        },
        {
          attribute: 'required',
          isValid: input => input.value.trim() !== '',
          errorMessage: (input, placeholder) => `${placeholder} es un campo requerido`
        }
    ];

    const validateSingleFormGroup = formGroup => {
        const input = formGroup.querySelector('input');
        const errorContainer = formGroup.querySelector('.error');

        let formGroupError = false;
        for (const option of validationOptions) {
            if(input.hasAttribute(option.attribute) && !option.isValid(input)){
                errorContainer.textContent = option.errorMessage(input, input.placeholder);
                formGroupError = true;
            }
        }
        
        if(!formGroupError) {
            errorContainer.textContent = '';
        }

        return !formGroupError;
    };

    formElement.setAttribute('novalidate', '');

    Array.from(formElement.elements).forEach(elmnt => {
        elmnt.addEventListener('blur', event => {
          validateSingleFormGroup(event.currentTarget.parentElement.parentElement)
        });

        for (const allowed of allowedKeyP) {
          if(elmnt.hasAttribute(allowed)){
            elmnt.addEventListener('keypress', event => {
              let charCode = event.which || event.keyCode;
              let errorDiv

              switch (allowed){
                case 'allownames':
                    if (
                      !(charCode >= 65 && charCode <= 90) && // Letras mayúsculas
                      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
                      !(charCode == 225) &&
                      !(charCode == 233) &&
                      !(charCode == 237) &&
                      !(charCode == 243) &&
                      !(charCode == 250) && //vocales minüsculas con acento
                      !(charCode == 209) &&
                      !(charCode == 241) && //Ñ y ñ
                      !(charCode == 46) && //Punto
                      !(charCode == 32) //Espacio
                    ) {
                      event.preventDefault();
                      errorDiv = event.currentTarget.parentElement.nextElementSibling;
                      errorDiv.textContent = 'No se permite ingresar números';
                      setTimeout(() => {
                          errorDiv.textContent = '';
                      }, 2500);
                    }
                    break;
                case 'allownumbers':
                    if (charCode < 48 || charCode > 57) {
                      event.preventDefault();
                      errorDiv = event.currentTarget.parentElement.nextElementSibling;
                      errorDiv.textContent = 'Se permite ingresar únicamente números';
                      setTimeout(() => {
                        errorDiv.textContent = '';
                      }, 2500);
                    }
                    break;
                case 'allowalphanum':
                    if (
                      !(charCode >= 33 && charCode <= 122) && // Caracteres permitidos
                      !(charCode >= 164 && charCode <= 165) // Ñ, ñ
                    ) {
                      event.preventDefault();
                      errorDiv = event.currentTarget.parentElement.nextElementSibling;
                      errorDiv.textContent = 'Se permite ingresar únicamente caracteres alfanuméricos';
                      setTimeout(() => {
                        errorDiv.textContent = '';
                      }, 2500);
                    }
                    break;
                case 'allowfloats':
                    if ((charCode < 48 || charCode > 57) && !(charCode == 46)){
                      event.preventDefault();
                    }
                    if(elmnt.value.charAt(elmnt.value.length-3) == '.'){
                      event.preventDefault();
                    }
                    break;
                default:
                    break;
              }
            });
          }
        }
    });

    formElement.addEventListener('submit', event => {
        const formValid = validateAllFormGroups(formElement);
        if(!formValid) {
          event.preventDefault();
        } else {
          console.log('El formulario es válido');
        }
    });

    const validateAllFormGroups = formToValidate => {
        const formGroups = Array.from(formToValidate.querySelectorAll('.formGroup'));

        const allValidGroups = formGroups.map((formGrp) => {return validateSingleFormGroup(formGrp)});
        console.log(allValidGroups);
        return allValidGroups.every((validGroup) => validGroup == true);
    }
}

validateForm('#registrationForm');