export const getUsers = async (numberUser: number, gender: string, nationality: string) => {
  let url = `https://randomuser.me/api/?nat=${nationality}&results=${numberUser}`

  if (gender) {
    url += `&gender=${gender}`
  }

  const request = await fetch(url)
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