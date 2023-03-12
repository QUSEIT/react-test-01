import { SETTING_MENU_STATUS } from '../constants/deliver'

export type commonProp = {
    menuStatus: boolean
}

const COMMON_DATA : commonProp = {
    menuStatus: false
}

export default function commonData (state = COMMON_DATA, action : { type: string } & commonProp) : commonProp {
  switch (action.type) {
    case SETTING_MENU_STATUS:
      return {
        ...state,
        menuStatus: action.menuStatus
      }
    default:
      return state
  }
}
