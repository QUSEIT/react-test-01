import {useState} from 'react'
import { DatePicker} from 'antd-mobile'
import style from './style.module.scss'
interface IDatePickerProps {
  dateValue?: string,
  setDateValue: any
}
function NewDatePicker (props: IDatePickerProps) {
  const {dateValue, setDateValue} = props
  const [visible, setVisible] = useState(false)
  const now = new Date()
  return (
    <div>
      <div
        onClick={() => {
          setVisible(true)
        }}
        className={style.datePicker}
      >
        <div className={style.word}>
        {dateValue !== '' ? dateValue : '选择日期区间'}
        </div>
        <div>
          &gt;
        </div>
      </div>
      <DatePicker
          title='时间选择'
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          max={now}
          onConfirm={val => {
            console.log(val.toLocaleDateString());
            
            setDateValue(val.toLocaleDateString())
          }}
        />
    </div>
  )
}

export default NewDatePicker