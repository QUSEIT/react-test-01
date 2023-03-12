import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from "redux";
import { RootState } from '@/redux/reducers/index'
import PackageInfo from '@/components/PackageInfo/Index';
import PackageDate from '@/components/PackageDate/Index';
import SearchInfo from '@/components/SearchInfo/Index';
import PackageStatus from '@/components/PackageStatus/Index';
import MaskContent from '@/components/MaskContent/Index';
import Footer from '@/components/Footer/Index';
import { packageDetail as packageType  } from '@/constant/commonType';
import { getDeliverData } from '@/redux/action/delivery';
import { limitOffsetPage } from '@/utils/common';
import noneTip from '@/assets/images/no-data.png'
import './App.scss'

const App = () => {

  const dispatch = useDispatch();
  const { filterData, currentPage, showCount } = useSelector((store : RootState) => store.delivery);
  const { menuStatus } = useSelector((store : RootState) => store.commonData);

  /*
  * showCount固定为5页
  */
  const { start,end } = limitOffsetPage(currentPage,showCount);

  // 对数据进行分页
  const packageList = filterData.slice(start,end);

  // 模拟加载数据
  useEffect(() => {    
    dispatch(getDeliverData() as any);
  },[])

  return (
    <div className="delivery-container">
      <div className="filter-content">
        <SearchInfo />
        <PackageDate />
        <PackageStatus />
      </div>
      <div className="package-content">
        {
          packageList.length > 0 ? packageList.map((d:packageType) => <PackageInfo key={d.id} packageDetail={d} />) : <img className="data-tip" src={noneTip} alt="无数据" />
        }              
      </div>      
      <Footer />
      {
        menuStatus && <MaskContent />
      }   
    </div>
  )
}

export default App;
