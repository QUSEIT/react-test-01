import React, {useState} from 'react'
import { Dropdown, Radio, Space, } from 'antd-mobile'
// import { ArrowDownCircleOutline, DownOutline } from 'antd-mobile-icons'
import style from './style.module.scss'
import NewSearchBar from '../../components/newSearchBar'
import NewDatePicker from '../../components/datePicker'
import Card from '../../components/card'
import Pagination from '../../components/pagination'
interface IStateFuncToUpdate {
  (arg0: (prevState: any) => any): void;
}
function HomePage () {
  const changePageInfo = (
    startPage: number,
    pageSize: number,
    setFn: IStateFuncToUpdate
  ) => {
    console.log(startPage);
    
    setFn((prevState:any) => ({
      ...prevState,
      startPage: startPage,
      pageSize: pageSize
    }))
    
  }
  // const updatePageInfo = (
  //   setFn: IStateFuncToUpdate,
  //   resetPage: boolean = true
  // ) => {
  //   setFn(prevState => ({
  //     ...prevState,
  //     startPage: resetPage ? 1 : prevState.startPage,
  //     updateCount: ++prevState.updateCount
  //   }))
  // }
  
  
  const [dateValue, setDateValue] = useState('')
  const [listData] = useState([
    {
      server: '法邮海运',
      waybillNo: 'EN0019038190FR',
      relatedWaybill: '',
      receiptName: '元康',
      phone: '12345678910',
      orderDate: '2022-01-17 09:12:21'
    },
    {
      server: '法邮海运',
      waybillNo: 'EN0019038190FR',
      relatedWaybill: '',
      receiptName: '元康',
      phone: '12345678910',
      orderDate: '2022-01-17 09:12:21'
    },
    {
      server: '法邮海运',
      waybillNo: 'EN0019038190FR',
      relatedWaybill: '',
      receiptName: '元康',
      phone: '12345678910',
      orderDate: '2022-01-17 09:12:21'
    },
    {
      server: '法邮海运',
      waybillNo: 'EN0019038190FR',
      relatedWaybill: '',
      receiptName: '元康',
      phone: '12345678910',
      orderDate: '2022-01-17 09:12:21'
    },
    {
      server: '法邮海运',
      waybillNo: 'EN0019038190FR',
      relatedWaybill: '',
      receiptName: '元康',
      phone: '12345678910',
      orderDate: '2022-01-17 09:12:21'
    },
    {
      server: '法邮海运',
      waybillNo: 'EN0019038190FR',
      relatedWaybill: '',
      receiptName: '元康',
      phone: '12345678910',
      orderDate: '2022-01-17 09:12:21'
    },
  ])
  const [pageInfo, setPageInfo] = useState(
    {
      startPage: 1,
      pageSize: 5,
      totalCount: listData.length,
      updateCount: 0
    }
  )
  return (
    <div className={style.homePage}>
    <div className={style.searchBar}>
      <div className={style.bar}>
        {/* <SearchBar placeholder='请输入内容' /> */}
        <NewSearchBar placeholderKey='searchName' />

      </div>
      <div>搜索</div>

    </div>
    {/* <div className='datePicker'>
      <div>


      </div>
      <DatePicker
          title='时间选择'
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          max={now}
          // onConfirm={val => {
          //   Toast.show(val.toDateString())
          // }}
        />
    </div> */}
    <div className={style.dateBox}>
      <NewDatePicker dateValue={dateValue} setDateValue={setDateValue}/>
    </div>
    <Dropdown>
          <div className={style.typeWord}>
            <div style={{ padding: 12 }}>
              包裹状态
            </div>
          </div>
          <Dropdown.Item key='sorter2' title='排序'>
            <div style={{ padding: 12 }}>
            <Radio.Group defaultValue='all'>
                <Space direction='vertical' block>
                  <Radio block value='new'>
                    新订单
                  </Radio>
                  <Radio block value='nearest'>
                    已揽收
                  </Radio>
                  <Radio block value='transform'>
                    运输中
                  </Radio>
                  <Radio block value='sent'>
                    派送中
                  </Radio>
                  <Radio block value='all'>
                    全部
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </Dropdown.Item>
    </Dropdown>
    <div className={style.cardList}>
      {
        listData.map((item, index) => (
          <div key={index}>
            <Card data={item}></Card>
          </div>
        ))
      }
    </div>
    <div className="pagination-box">
      <Pagination
        pageInfo={pageInfo}
        changePageInfo={(startPage, pageSize) => changePageInfo(startPage, pageSize, setPageInfo)}
      ></Pagination>
    </div>
  </div>
  )
}

export default HomePage