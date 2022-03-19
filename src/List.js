import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

import green from "@material-ui/core/colors/red";
import MailIcon from "@material-ui/icons/Mail";

const List = ({items, removeItem, editItem}) => {
    return(
        <div className="grocery-list">
            {items.map ((item) => {
                const {id, title} = item;
                return (
                    <article className="grocery-item" key={id}>
                            <p className="title">{title}</p>
                            <div className="btn-container">
                                <button type="button" className="edit-btn" onClick={() => editItem(id)}>
                                    <FaEdit style={{ color: "blue" }}/>
                                </button>
                                <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
                                <FaTrash style={{ color: "red" }}/>
                                </button>
                            </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;