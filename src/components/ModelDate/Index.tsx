import React from "react";
import classnames from "classnames";
import "./index.scss";

type ModelProps = {
    children: React.ReactNode;
    modelStatus: boolean;
    submitCallback: () => void
    cancelCallback: () => void
}

const Index : React.FC<ModelProps> = (modelProps) => {

    const { children, modelStatus = false, submitCallback, cancelCallback } = modelProps

    const submitAction = () => {
        if( submitCallback ){
            submitCallback();
        }
    }

    const cancelAction = () => {
        if( cancelCallback ){
            cancelCallback();
        }
    }

    return (
        <div className={classnames('date-model',{ 'show': modelStatus })}>
            <div className="model-dialog">
                <div className="model-bar">
                    <div className="action make-sure" onClick={submitAction}>
                        确定
                    </div>
                    <div className="action cancel" onClick={cancelAction}>
                        取消
                    </div>                    
                </div>
                <div className="model-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Index;