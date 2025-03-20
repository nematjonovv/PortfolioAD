import { createContext, useState } from "react";
const Context = createContext()

function MyProvider({children}) {

    const [category, setCategory] = useState([])
    const [type, setType] = useState('All')
    const [lang, setLang] = useState("en")
    const [projectId, setProjectId] = useState(1)
    return (
        <Context.Provider value={{projectId, setProjectId, category, setCategory,type, setType,lang, setLang}}>
            {children}
        </Context.Provider>
    )
}

export {Context, MyProvider}