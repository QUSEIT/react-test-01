interface PackStatusType{
    [key: number]: string
}

export const PACKAGE_STATUS : PackStatusType = {
    0: '全部',
    1: '新订单',
    2: '已揽收',
    3: '运输中',
    4: '派送中'
}

export const packageStatusList = [{
    id: 0,
    title: '全部'
},{
    id: 1,
    title: '新订单'
},{
    id: 2,
    title: '已揽收'
},{
    id: 3,
    title: '运输中'
},{
    id: 4,
    title: '派送中'
}];