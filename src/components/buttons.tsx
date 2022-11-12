
import Data from './babyNamesData.json'
import {useState} from "react"
import './buttons.css'
import { Bundle } from 'typescript';

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
    setName(prev => prev + "  "+ name);
}

const gender = (baby:BabyNamesProps):string => {
    if (baby.sex === 'm'){
        return 'male';
    } else{
        return 'female';
    }
}

    return(
        <div className="nameButtons">
            <input value={name}/>
            <div className="flex-buttons">
            {
                    Data.map( baby => {
                    return(
                       
                        <div className= "gendered" key={baby.id}>
                            <button className={gender(baby)} onClick={() => addName(baby.name)}>{baby.name}</button>
                        </div>
                        
                    )
                })
                
            }
            </div>
        </div>
    );
}