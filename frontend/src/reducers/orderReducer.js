import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_RESET,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_LAST_THREE_FAIL,
  ORDER_LIST_LAST_THREE_RESET,
  ORDER_LIST_LAST_THREE_REQUEST,
  ORDER_LIST_LAST_THREE_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from '../constants/orderConstatns'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload }
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      }
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true, orders: [] }
    case ORDER_LIST_SUCCESS:
      return { loading: false, success: true, orders: action.payload }
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_LIST_RESET:
      return {
        orders: [],
      }
    default:
      return state
  }
}

export const orderListLastThreeReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_LAST_THREE_REQUEST:
      return { loading: true, orders: [] }
    case ORDER_LIST_LAST_THREE_SUCCESS:
      return { loading: false, success: true, orders: action.payload }
    case ORDER_LIST_LAST_THREE_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_LIST_LAST_THREE_RESET:
      return {
        orders: [],
      }
    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true }
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true }
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}
