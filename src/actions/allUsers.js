export const LOAD_USERS = 'LOAD_USERS'

export function loadUsers (allUsers) {
  return {
    type: LOAD_USERS,
    allUsers:allUsers,
  }
}