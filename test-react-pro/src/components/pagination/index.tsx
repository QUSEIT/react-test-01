import React, { useEffect, useState } from 'react'
// import { Pagination } from 'antd'
// import { IPageInfo } from '@/utils/interface'
import style from './style.module.scss'
interface IPageInfo {
  startPage: number;
  pageSize: number;
  totalCount: number;
  updateCount: number;
}
interface IPaginationProps {
  pageInfo: IPageInfo;
  changePageInfo: (startPage: number, pageSize: number) => void;
}

function CustomPagination (props: IPaginationProps) {
  const { pageInfo, changePageInfo } = props
  const {pageSize} = pageInfo
  const [pageCount, setPageCount] = useState(0)
  useEffect(() => {
    if(Math.floor(pageInfo.totalCount / pageSize) === Math.ceil(pageInfo.totalCount / pageSize)){
      setPageCount(Math.ceil(pageInfo.totalCount / pageSize))
    }
    if(Math.floor(pageInfo.totalCount / pageSize) < Math.ceil(pageInfo.totalCount / pageSize)){
      setPageCount(Math.ceil(pageInfo.totalCount / pageSize))
    }
    // if (Math.floor(pageInfo.totalCount / pageSize) <= startPage) {

    // }
  }, [pageInfo.totalCount, pageSize])
  const nextChange = () => {
    const {startPage, pageSize} = pageInfo
    if(startPage + 1 > pageCount) return
    changePageInfo(startPage+1, pageSize)
  }

  const preChange = () => {
    const {startPage, pageSize} = pageInfo
    if (startPage === 1) return
    changePageInfo(startPage-1, pageSize)
  }

  return (
    <div>
      <div className={style.pagination}>
        <div className={style.prePage} onClick={preChange}>
          上一页
        </div>
        <div className={style.pageInfo}>
          {pageInfo.startPage}/{pageCount}
        </div>
        <div className={style.nextPage} onClick={nextChange}>
          下一页
        </div>
      </div>
    </div>
  )
}

export default CustomPagination
