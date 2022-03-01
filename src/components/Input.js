import { forwardRef, useImperativeHandle, useRef } from "react"

function Input({value, onChange}, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));
    return (
        <div>
            <input 
                ref={inputRef}
                type='text' 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}
Input = forwardRef(Input);

export default Input;