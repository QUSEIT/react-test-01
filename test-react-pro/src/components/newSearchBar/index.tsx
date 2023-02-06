import React from 'react'
import { SearchBar} from 'antd-mobile'
interface ISearchProps {
  placeholderKey: string
}
const placeholderMap: {[index: string]: string} = {
  searchName: '包裹收件人快递号收件人电话',
}
function NewSearchBar(props: ISearchProps) {
  const {placeholderKey} = props
  return (
    <div>
    <SearchBar placeholder={`请输入${placeholderMap[placeholderKey]}`}/>
  </div>
  )
}

export default NewSearchBar