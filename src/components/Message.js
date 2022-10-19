import React from 'react';

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://i.ibb.co/Dt7DTk5/bg.jpg" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://i.ibb.co/Dt7DTk5/bg.jpg" alt="" />
            </div>
        </div>
    );
};

export default Message;