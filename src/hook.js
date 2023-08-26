import { useState } from "react";


//* Custom Hooks For Create Post *//

export function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value)
    };
    return{
        value,
        onChange:handleChange
    }

}