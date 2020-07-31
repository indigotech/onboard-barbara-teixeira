const EMAIL_REGEX = /^[\w]+([+-._][a-z0-9]*)*@[\w.-]+(\.[a-z]{2,3})+$/

const hasDigit = (value: string): string =>
  /\d/.test(value) ? "" : "Deve conter um dígito."

const hasLetter = (value: string): string =>
  /[a-zA-Z]/.test(value) ? "" : "Deve conter uma letra."

const validEmail = (value: string): string =>
  EMAIL_REGEX.test(value) ? "" : "E-mail inválido"

const required = (value: string): string =>
  value.length > 0 ? "" : "Este campo não pode estar vazio."

const minLength = (minLength: number) => (value: string): string =>
  value.length >= minLength ? "" : "Sua senha deve ter no min. 7 caracteres."

export { hasDigit, hasLetter, validEmail, required, minLength }
