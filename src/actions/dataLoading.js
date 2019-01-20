export const SET_DATA_LOADING = 'SET_DATA_LOADING'
export function setDataLoading (dataLoading) {
  return {
    type: SET_DATA_LOADING,
    dataLoading,
  }
}