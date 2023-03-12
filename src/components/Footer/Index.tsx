import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/reducers/index'
import classnames from 'classnames';
import "./index.scss";

const Footer : React.FC<{}> = () => {

    const { currentPage,pageSize } = useSelector((store :RootState) => store.delivery);

    const dispatch = useDispatch();
    const prevPage = () : void => {
        if( currentPage === 1 )return;
        dispatch({
            type: 'JUMP_PAGE_GET_DATA',
            currentPage: currentPage - 1
        })
    }

    const nextPage = () : void => {
        if( currentPage === pageSize )return;
        dispatch({
            type: 'JUMP_PAGE_GET_DATA',
            currentPage: currentPage + 1
        })
    }

    return (
        <div className="foot-page">
            <div className={classnames('page-info page-action',
                { 'page-disable': currentPage === 1, 'page-active': currentPage > 1 })}
                onClick={prevPage}
            >
                上一页
            </div>
            <div className="page-info page-number">
                {currentPage}/{pageSize}
            </div>
            <div className={classnames('page-info page-action',
                { 'page-disable': currentPage === pageSize || pageSize === 0, 'page-active': currentPage < pageSize })}
                onClick={nextPage}
            >
                下一页
            </div>
        </div>
    )
}

export default Footer;