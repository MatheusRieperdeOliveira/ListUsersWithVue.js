export const getUsers = async () => {
  const request = await fetch('https://randomuser.me/api/?nat=br&results=99')
  const response = await request.json()

  return response.results
}

export const firstLetter = (first: string, last: string): string => {
  return `${first.charAt(0)} ${last.charAt(0)}`.toUpperCase()
}

export const formatAt = (email: string): string => {
  let name  = email.split('@')[0]
  if (name.includes('.')) {
    name = name.split('.')[0]
  }
  return `@${name}`
}