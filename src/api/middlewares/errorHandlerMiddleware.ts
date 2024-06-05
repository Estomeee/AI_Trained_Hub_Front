import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'

export const errorHandlerMiddleware: Middleware = () => dispatch => action => {
  if (isRejectedWithValue(action)) {
    console.error(action.payload) // TODO show toast
  }
  return dispatch(action)
}