import React from 'react';

const Scrollbar = (props) => {
    return (
        <div className="my_scrollable">
            { props.children }
        </div>
    )
}

export default Scrollbar;
