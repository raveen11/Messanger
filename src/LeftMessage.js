import React from 'react'

const LeftMessage = ({user}) => {
    let {id,name,email,status,gender}=user
    return (
        <div>
             <div className="message you">
                 <div className="msgHead" style={{marginRight:10}}>
                    {id}
                </div>
                <div className="msgBody">
                {email}
                <p>{name}</p>
                <p>{gender}</p>
                <p>{status==undefined?null:status}</p>

                
                
                </div>
              
		</div>
        
        </div>
    )
}

export default LeftMessage
