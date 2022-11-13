
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

    const [pick,setPick] = useState<BabyNamesProps[]>([]);

    const addPick = (pick:BabyNamesProps) =>{
        setPick(prev => [...prev,pick])
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
            <div className = "picks">
                {
                    pick.map( pick => {
                        return(
                            <div className= "name-pick" key={pick.id}>
                            <button className={gender(pick)}>{pick.name}</button>
                            </div>
                        )
                    }

                    )
                }
            </div>
            <div className="flex-buttons">
            {
                    BabyNamesArr.map( baby => {
                    return(
                       
                        <div className= "gendered" key={baby.id}>
                            <button className={gender(baby)} onClick=
                            {() => {
                            addName(baby.name)
                            addPick(baby)
                            }
                        }>
                                
                                {baby.name}
                            
                            </button>
                        </div>
                        
                    )
                })
                
            }
            </div>
        </div>
    );
}