import { useState } from "react";

export default function Form() {

    const [state, setstate] = useState('test');

    const [title, setTitle] = useState(true);

    function changeValue(e) {
        setstate(e.target.value);
        console.log(state);
    }

    function formSubmit(e) {
        e.preventDefault();
        alert('Form is Submitted');
    }

    function formClicked() {
        // alert('Form is Clicked');
        setTitle(!title);
    }

    const variable = true;

    return (
        <>
        {
            variable 
                ?  
                    <form action='/submit_form' onSubmit={formSubmit}>
                        {
                            title
                            ?
                            <h2>Form Title</h2>
                            :null
                        }
                        <textarea />
                        <br/>
                        {/* {String(state)} */}
                        <p>{state}</p>
                        <br/>
                        <input 
                            value={state} 
                            onChange={changeValue} 
                        />
                        <br/>
                        <button type="button" onClick={formClicked}> Submit </button>
                    </form>
                : null
        }

        </>
    )
}