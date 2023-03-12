import { packageDetail as deliveryType  } from '@/constant/commonType';
import { type deliveryProps } from '@/redux/reducers/delivery';

export const limitOffsetPage = (currentPage : number,showCount: number) : { start: number, end: number } => {
    return {
        start: (currentPage - 1) * showCount,
        end: currentPage * showCount
    }
}

export const getFilterData = (packageList : deliveryType[], paramData : deliveryProps['filterParam']) : deliveryType[] => {    
    const { startDate, endDate, status, searchName } = paramData
    let filterData : deliveryType[] = packageList
    filterData = packageList.filter(v => {        
        let nameJudge = true; let StatusJude = true; let timeJudge = true;    
        if( searchName.length > 0 ){
            const regName = new RegExp(searchName);        
            nameJudge = (regName.test(v.receive_name) || regName.test(v.track_number) || regName.test(v.contact_tel + ''))
        }
        if( status > 0 ){                    
            StatusJude = status === v.package_status
        }
        if( startDate !== 0 ){
            timeJudge = v.create_time >= startDate && v.create_time <= endDate
        }  
        return nameJudge && StatusJude && timeJudge
    })    

    return filterData

}
