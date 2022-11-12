
import Data from './babyNamesData.json'
import {useState} from "react"

interface BabyNamesProps {
    id: number;
    name: string;
    sex: string;
}
const BabyNamesArr: BabyNamesProps [] = Data;


export default function NameButtons(){

    const [name,setName] = useState('');

    const addName = (name: string) =>
{
    setName(prev => prev + name);
}

    return(
        <div className="nameButtons">
            <input value={name}/>
            {
                    Data.map( baby => {
                    return(
                        <div className="button" key={baby.id}>
                            <button onClick={() => addName(baby.name)}>{baby.name}</button>
                        </div>
                    )
                })
                
            }
        </div>
    );
}