import React,{ useState } from "react";
import classnames from "classnames";
import { packageStatusList, PACKAGE_STATUS } from '@/constant/common';
import { RootState } from '@/redux/reducers/index'
import { useSelector, useDispatch } from 'react-redux';
import { SETTING_DATA_BY_PARAM, SETTING_MENU_STATUS } from '@/redux/constants/deliver'

import './index.scss'
type PackStatus = {

}

const Index : React.FC<PackStatus> = () => {


    const dispatch = useDispatch();

    const { commonData,delivery } = useSelector((store : RootState) => store);
    const { menuStatus } = commonData
    const { filterParam } = delivery

    const toggleMenu = () : void => {
      
      dispatch({
        type: SETTING_MENU_STATUS,
        menuStatus: !menuStatus
      })
    }

    const chooseStatus = (id : number) : void => {
      dispatch({
        type: SETTING_DATA_BY_PARAM,
        filterParam: {
          ...filterParam,
          status: id
        }
      })
    }

    return (
        <>
          <div className="package-filter">
              <div className="package-status-title">
                包裹状态
              </div>
              <div className="package-status-title package-status-list" onClick={toggleMenu}> 
                <span className={classnames('title',{
                  'title-active': menuStatus
                })}>
                  {PACKAGE_STATUS[filterParam.status]}
                </span>
                <i className={classnames("drop-arrow",{
                  'drop-arrow-active': menuStatus
                })}></i>
              </div>      
            </div>
            <div className={classnames('package-status-content',{ 'package-status-active': menuStatus })}>
              {
                packageStatusList.map(v => <div className="status-name" key={v.id} onClick={() => chooseStatus(v.id)}>
                <span className={classnames('title',{ 'title-active': v.id === filterParam.status })}>{v.title}</span>
                {
                  v.id === filterParam.status && <div className="choose-status"></div>
                }                
              </div>)
              }
            </div>
        </>
    )
}

export default Index;