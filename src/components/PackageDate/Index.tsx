import React,{ useState, useEffect } from "react";
import dayjs from "dayjs";
import ModelDate from "@/components/ModelDate/Index"
import { RootState } from '@/redux/reducers/index'
import { useSelector, useDispatch } from 'react-redux';
import { SETTING_DATA_BY_PARAM } from '@/redux/constants/deliver'
import Arrow from '@/assets/images/arrow-right.png';
import Calendar  from 'antd-mobile/es/components/Calendar'
import './index.scss'

type DateRangeProps = [Date, Date] | null;
type DateProps = number | Date;

const Index : React.FC<{}> = () => {

    const [modelStatus,setModelStatus] = useState(false);
    const [chooseRange,setChooseRange] = useState<DateRangeProps>(null);

    const dispatch = useDispatch();

    const { filterParam } = useSelector((store : RootState) => store.delivery);

    const rangeDateAction = () => {      
      setModelStatus(true);      
    }

    useEffect(() => {
      const { startDate, endDate } = filterParam;
      if( filterParam.startDate !== 0 ){
        setChooseRange([new Date(startDate),new Date(endDate)])
      }
    },[])

    /* 
    * startDate的时间戳需调整为零点
    * endDate的时间戳需调整为23:59:59
    */
    const chooseAction = () => {      
      let startDate : DateProps = 0;let endDate : DateProps = 0
      if( chooseRange !== null ){        
        [startDate,endDate] = chooseRange
        startDate = dayjs(startDate).startOf('date').valueOf();
        endDate = dayjs(endDate).endOf('date').valueOf()
      }
      
      dispatch({
        type: SETTING_DATA_BY_PARAM,
        filterParam: {
          ...filterParam,
          startDate,
          endDate,
        }
      })
      setModelStatus(false);
    }

    const getChooseDate = (val : DateRangeProps) => {      
      //dayRange = val;   
      setChooseRange(val);        
    }

    const cancelAction = () => {      
      setModelStatus(false);      
      if( filterParam.startDate !== 0 ){
        const { startDate, endDate } = filterParam;
        setChooseRange([new Date(startDate),new Date(endDate)])
      }
    }        

    return (
        <>
          <div className="date-range-filter" onClick={rangeDateAction}>
            <div className="open-dialog">
              选择日期区间
            </div>
            {
              filterParam.startDate > 0 && <div className="date-detail">
                <span className="day-range">{dayjs(filterParam.startDate).format('YYYY-MM-DD')}</span>
                <span>至</span>
                <span className="day-range">{dayjs(filterParam.endDate).format('YYYY-MM-DD')}</span>
              </div>
            }
            
            <img src={Arrow} className="arrow-image" alt="arrow-right" />
          </div>
          <ModelDate modelStatus={modelStatus} submitCallback={chooseAction} cancelCallback={cancelAction}>
            <Calendar              
              selectionMode='range'
              onChange={getChooseDate}        
              value={chooseRange}      
            />
          </ModelDate>
        </>        
    )
}

export default Index;