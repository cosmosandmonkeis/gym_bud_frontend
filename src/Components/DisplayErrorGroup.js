import React from "react";

function DisplayErrorGroup({errors}) {
    return (
        Object.keys(errors).length > 0 && (
            <div className='ui error message'>
                <ul className='list'>
                    {Object.values(errors).map((value => (
                        <li key={value}>{value}</li>
                    )))}
                </ul>
            </div>
        )
    )
}

export default DisplayErrorGroup
