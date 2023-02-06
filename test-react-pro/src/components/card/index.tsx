import style from './style.module.scss'

interface ICardProps {
  server?: string,
  waybillNo?: string,
  relatedWaybill?: string,
  receiptName?: string,
  phone?: string,
  orderDate?: string
}
interface IDataProps {
  data: ICardProps
}
function Card(props: IDataProps) {
  const {data} = props

  return (
    <div className={style.card}>
      <div className={style.leftContent}>
        <div className={style.item}>
          <div className={style.title}>服务</div>
          <div className={style.name}>{data.server}</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>运单号</div>
          <div className={style.name}>{data.waybillNo}</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>关联运单</div>
          <div className={style.name}>{data.relatedWaybill}</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>收件人</div>
          <div className={style.name}>{data.receiptName}</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>联系电话</div>
          <div className={style.name}>{data.phone}</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>下单日期</div>
          <div className={style.name}>{data.orderDate}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <div className={style.btn}>
          <button className={style.btnRed}>面单</button>
        </div>
        <div className={style.btn}>
          <button className={style.btnBlue}>更多</button>
        </div>
      </div>
    </div>
  )
}

export default Card