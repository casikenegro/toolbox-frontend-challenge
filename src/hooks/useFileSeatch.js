import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";
import { requestFiles } from "../redux/actions/files";

const useFileSearch = () => {

    const [input,setInput] = useState("");
    const dispatch = useDispatch();

    const onChange = useCallback( 
        (e) => {
            const text = e.target.value
            setInput(text);
            dispatch( requestFiles(text) );
        }, [setInput,dispatch]
    )

    return [input,onChange]
}

export default useFileSearch;