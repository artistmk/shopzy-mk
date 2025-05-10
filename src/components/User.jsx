import React from 'react';

const User = ({ cart }) => {

    const progress = (cart.length / 12) * 100; 

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
    };

    return (
        <>
            <div className="text-center" style={myStyle}>
                <h1>User Progress</h1>

                <h4 className="my-5">Cart Progress: {cart.length}/12 Items</h4>

                <div className="progress" style={{ width: "50%", height: "20%", margin: "auto" }}>  

                    <div className="progress-bar text-bg-warning" style={{ width: `${progress}%` }}>
                        {Math.round(progress)}%
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
