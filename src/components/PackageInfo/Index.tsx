import React from 'react'
import dayjs from 'dayjs'
import { PACKAGE_STATUS } from '@/constant/common'
import Toast from 'antd-mobile/es/components/toast'
import './index.scss'

type PackageProps = {
    packageDetail: {
        id: number,
        server_name: string,
        track_number: string,
        package_status: number,
        receive_name: string,
        contact_tel: number,
        create_time: number
    }
}

const Index : React.FC<PackageProps> = (packageInfo) => {

    const { packageDetail } = packageInfo

    const buttonSheet = () => {
        //to do sth
    }

    const buttonMore = () => {
        //to do sth
    }

    const copyTrackNumber = () => {        
        const copyText = document.getElementById(`copy-${packageDetail.id}`)  as HTMLInputElement;
        copyText.select();
        copyText.setSelectionRange(0, 99999);  
        navigator.clipboard.writeText(copyText.value);                
        Toast.show({
            content: `成功复制运单号:${copyText.value}`,            
        })       
    }

    return (
        <div className="package-block">
            <div className="package-info">
                <div className="package-info-list">
                    <div className="package-info-title">服务</div>
                    <div className="package-info-detail">{packageDetail.server_name}</div>
                </div>
                <div className="package-info-list" onClick={copyTrackNumber}>
                    <div className="package-info-title">
                        运单号(点击复制)
                    </div>
                    <div className="package-info-detail">{packageDetail.track_number}</div>
                    <input className="copy-text" readOnly type="text" id={`copy-${packageDetail.id}`} value={packageDetail.track_number} />
                </div>
                <div className="package-info-list">
                    <div className="package-info-title">包裹状态</div>
                    <div className="package-info-detail">{PACKAGE_STATUS![packageDetail.package_status]}</div>
                </div>
                <div className="relate-order">关联订单</div>
                <div className="package-info-list">
                    <div className="package-info-title">收件人</div>
                    <div className="package-info-detail">{packageDetail.receive_name}</div>
                </div>
                <div className="package-info-list">
                    <div className="package-info-title">联系电话</div>
                    <div className="package-info-detail">{packageDetail.contact_tel}</div>
                </div>
                <div className="package-info-list">
                    <div className="package-info-title">下单日期</div>
                    <div className="package-info-detail">{dayjs(packageDetail.create_time).format('YYYY-MM-DD MM:mm:ss')}</div>
                </div>
            </div>
            <div className="package-action">
                <button className="package-button button-sheet" onClick={buttonSheet}>
                    面单
                </button>
                <button className="package-button button-more" onClick={buttonMore}>
                    更多
                </button>
            </div>
        </div>
    )
}

export default Index
