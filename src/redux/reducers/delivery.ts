import { SETTING_DELIVER_DATA, JUMP_PAGE_GET_DATA, SETTING_DATA_BY_PARAM } from '../constants/deliver'
import { packageDetail as deliveryType  } from '@/constant/commonType';
import { getFilterData } from '@/utils/common';

export type deliveryProps = {
    totalDeliveryList: deliveryType[],
    filterData: deliveryType[],
    currentPage: number,
    pageSize: number,
    total: number,
    showCount: number, // 展示页数    
    filterParam: {
      searchName: string,
      startDate: number,
      endDate: number,
      status: number,
    }
}

const DELIVERY_DATA : deliveryProps = {
    totalDeliveryList: [],
    filterData: [],
    currentPage: 1,
    pageSize: 1,
    showCount: 5,
    total: 0,
    filterParam: {
      searchName: '',
      startDate: 0,
      endDate: 0,
      status: 0
    },
}

export default function delivery (state = DELIVERY_DATA, action : { type: string } & deliveryProps) : deliveryProps {
  switch (action.type) {
    case SETTING_DELIVER_DATA:
      const deliveryData = action.totalDeliveryList;
      const total = deliveryData.length;            
      return {
        ...state,
        totalDeliveryList: deliveryData,
        filterData: deliveryData,
        pageSize: Math.ceil(total / 5),
        total
      }
    case JUMP_PAGE_GET_DATA:            
      return {
        ...state,
        currentPage: action.currentPage,        
        pageSize: Math.ceil(state.filterData.length / 5),
      }  
    case SETTING_DATA_BY_PARAM:
      const { totalDeliveryList } = state;
      const filterData = getFilterData(totalDeliveryList,action.filterParam);
      return {
        ...state,
        filterData,
        currentPage: 1,
        pageSize: Math.ceil(filterData.length / 5),
        filterParam: {          
          ...action.filterParam
        }
      }
    default:
      return state
  }
}
