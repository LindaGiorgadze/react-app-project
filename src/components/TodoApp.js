import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import TodoItem from './TodoItem';
import apiRequest from '../apiRequest';
import useRequest from '../hooks/useRequest';


export default function TodoApp() {
    const [value, setValue] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const inputRef = useRef();
    
    const data =  useRequest('GET', 'tasks');
    console.log(data);

    useEffect(() => {
        setTodoItems(data);
    }, [data]);

    function addNewItem(e) {
        e.preventDefault();
        let newItem = {
            id: Date.now(),
            text: value,
            completed: false
        }
        setTodoItems([newItem, ...todoItems]);

        apiRequest('POST', 'tasks/create', {
            text: value
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
        setValue('');
    }
    function changeItem(id) {
        let changedItems = todoItems.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item;
        });
        setTodoItems(changedItems);
    }
    useEffect(() => {
      inputRef.current.focus();
    }, []);
    
    return (
        <div className="TodoApp">
            <h3>Todo App</h3>
            <form onSubmit={addNewItem} >
                <Input value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
                <Button type='submit' text='Add Item' />
            </form>
            <ul>
                {
                    (todoItems || []).map(item => {
                        return (
                            <TodoItem 
                                key={item.id} 
                                completed={item.completed} 
                                id={item.id} 
                                text={item.text} 
                                passedFunction={changeItem}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}