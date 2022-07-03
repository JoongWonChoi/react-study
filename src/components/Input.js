import { useState } from "react";

function Input(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    })

    const { name, nickname } = inputs;

    const onChange = (e) => {
        console.log('event name : ',e.target.name);
        console.log('event value : ',e.target.value);
        const { name, value } = e.target;
        // console.log('value', value);
        // console.log('event.name : ', name);
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        })
        
    };

    return(
        <div>
            <form>
                <input name="name" placeholder="이름" onChange={onChange} ></input>
                <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}></input>
                <button onClick={onReset}>reset!</button>
            </form>
            <p>이름 : {inputs.name}({inputs.nickname})</p>
            
        </div>

    );
}

export default Input;
