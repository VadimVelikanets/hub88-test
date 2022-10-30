import React from 'react';
import './Filter.scss';
import closeIcon from '../../assets/icons/close-icon.svg';
import {FilterProps} from "./types";

const Filter = ({value, onChangeValue}: FilterProps) => {

    const onClearInput = () => {
        onChangeValue('')
    }

    return (
        <div className="filter">
            <input value={value}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       onChangeValue(e.target.value)
                   }}
                   placeholder="Enter code"
                   className="filter__input"
            />
            {value.length > 0 && (
                <img src={closeIcon} className="filter__close" onClick={onClearInput}/>
            )}
        </div>
    );
};

export default Filter;