import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    profStatus: string
    isOwner: number
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<PropsType> = ({profStatus, isOwner, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profStatus);

    useEffect(() => {
        setStatus(profStatus)
    }, [profStatus])

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
            <div>
                <b> Status: </b><span onDoubleClick={activateEditMode}>{profStatus || "====="}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>}
        </div>
    )
};
