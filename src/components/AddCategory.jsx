import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
const [inputValue, setInputValue] = useState('');

const onInputChange = ({target})=>{
    setInputValue(target.value);
}

const onSubmit = (event)=>{
  event.preventDefault();
  if( inputValue.trim().length <= 1) return;

  // setCategories( categories => [ inputValue, ...categories ]);
  setInputValue('');
  onNewCategory( inputValue.trim() );
    
}

  return (
    <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
    />

<button className="button-85" role={"button"} type="submit">Buscar</button>

</form>
  )
}
