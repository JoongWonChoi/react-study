import { useReducer } from "react";


function User({user}){
    const list=[];
    for(var i=0; i<user.length; i++){
        list.push(
            <div key={user[i].id}>
                {user[i].username} ({user[i].email})
            </div>
            );
    }
    return(
        <>
            <div>
                {list}
            </div>
        </>
    )
}

function UserList(){
    const users = [
        {
            id : 1, username : 'jwc', email : "aa@naver.com"
        },
        {
            id : 2, username : 'abc', email : "bb@naver.com"
        },
        {
            id : 3, username : 'def', email : "cc@naver.com"
        },
    ]
    return(
        <div>
            <User user={users} />
        </div>
    )
}

export default UserList;

