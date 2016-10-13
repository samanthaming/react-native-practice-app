export const selectRepo = (repoId) => {
  return {
    type: 'select_repo',
    payload: repoId
  }
}
