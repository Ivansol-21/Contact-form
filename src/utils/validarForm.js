export const validateForm = (values) => {
  const errors = {};

  if (!values.firstName) errors.firstName = "El nombre es obligatorio";
  if (!values.lastName) errors.lastName = "El apellido es obligatorio";

  if (!values.email) {
    errors.email = "El correo es obligatorio";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Correo inválido";
  }

  if (!values.query) errors.query = "Debe seleccionar una opción";

  if (!values.message) errors.message = "El mensaje es obligatorio";

  if (!values.agree) errors.agree = "Debe aceptar los términos";

  return errors;
}