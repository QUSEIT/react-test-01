import { packageData } from '@/service/data';
import * as types from '../constants/deliver';

export const getDeliverData = () => {
    return (dispatch: ({}) => void ) => {
        dispatch({type: types.SETTING_DELIVER_DATA, totalDeliveryList: packageData});
    }
}
