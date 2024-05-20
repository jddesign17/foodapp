import React,{createContext,useState} from "react";

const DataContext = createContext()


export const Dataprovider = ({children})=>{

    const [count,setcount]=useState('')

    return(
        <DataContext.Provider value={{count,setcount}}>
        {children}
    </DataContext.Provider>
    )
}


export default DataContext