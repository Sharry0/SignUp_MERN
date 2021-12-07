
import { useState } from "react";

function useToggleState(input = false) {
    const [state, setState] = useState(input)

    const toggleState = () =>{
        setState(!state)
    }

    return [state, toggleState]
}

export default useToggleState
