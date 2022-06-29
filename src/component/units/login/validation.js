export function CheckValidationLoginEmail(email) {
  if(/^\w+@\w+\.\w+$/.test(email) || email === ''){
    return email
  } else{
    return false
  }
}

export function CheckValidationLoginPassword(pw) {
  if(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pw) || pw === ''){
    return pw
  } else{
    return false
  }
}
