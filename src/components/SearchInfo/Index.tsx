import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/reducers/index'
import { SETTING_DATA_BY_PARAM } from '@/redux/constants/deliver'
import './index.scss'

type SearchProps = {
    
}

const Index : React.FC<SearchProps> = () => {

    const [searchName,setSearchName] = useState('');

    const dispatch = useDispatch();
    const { filterParam, } = useSelector((store : RootState) => store.delivery);

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) : void => {       
        let sName = e.target.value.trim();
        if( sName.length > 20 ){
          sName = sName.slice(0,20)
        }
        setSearchName(sName)
    }

    const searchAction = () : void => {      
      dispatch({
        type: SETTING_DATA_BY_PARAM,
        filterParam: {
          ...filterParam,
          searchName: searchName
        }
      })
    }

    const clearSearchName = () : void => {
      setSearchName('');
    }

    return (
        <div className="search-filter">
          <div className="search-input">
            <div className="search-icon"></div>
            <input type="text" className="input-fill" value={searchName} placeholder="包裹收件人快递号收件人电话" onChange={e => changeInputValue(e)} />
            {
              searchName.length > 0 && <div className="clear-search-name" onClick={clearSearchName}></div>
            }            
          </div>
          <div className="search-button-title" onClick={searchAction}>
            搜索
          </div>
        </div>
    )
}

export default Index;