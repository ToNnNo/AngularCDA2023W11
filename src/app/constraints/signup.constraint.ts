import {ConstraintType} from "../types/ConstraintType";

export const signupConstraint: ConstraintType = {
  email: {
    required: `L'adresse email est obligatoire`,
    email: `L'adresse email n'est pas valide`
  },
  password: {
    required: `Le mot de passe est obligatoire`,
    minlength: `Le mot de passe doit contenir au moins 8 caractères`
  },
  confirm: {
    required: `La confirmation est obligatoire`,
    check_passwords: `Le mot de passe et la confirmation sont différents`
  },
  terms: {
    required: `Vous devez valider les CGU`
  }
}
