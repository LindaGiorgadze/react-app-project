import Button from './Button';

export default function TodoItem({completed, id, text, passedFunction}) {
    return (
        <li>
            <input 
                type='checkbox' 
                checked={completed} 
                onChange={() => passedFunction(id)}
            />
            <span className={completed ? 'completed' : ''}>{text}</span>
            <Button text='Delete' customClass='customBtn' />
        </li>
    )
}