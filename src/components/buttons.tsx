
import Data from './babyNamesData.json'
import { useState } from "react"
import './buttons.css'
import { Bundle } from 'typescript';
import React, {ChangeEvent} from 'react'

interface BabyNamesProps {
    id: number;
    name: string;
    sex: string;
}
const BabyNamesArr: BabyNamesProps[] = Data;


export default function NameButtons() {

    const [searchTerm,setSearchTerm] = useState("");

    function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>): void {
        setSearchTerm(event.target.value);
    }

    function matchingNames(searchTerm:string, list: BabyNamesProps[]): BabyNamesProps[] {
        const matchList: BabyNamesProps[] = [];
        
        for(const BabyNamesProps of list){
            const lowerName = BabyNamesProps.name.toLowerCase();
            const lowerSearch = searchTerm.toLowerCase();
            if((lowerName).includes(lowerSearch)){
                matchList.push(BabyNamesProps);
            }
        }
        
        return matchList;
    }
    const matches = matchingNames(searchTerm, BabyNamesArr);
    
    const [name, setName] = useState('');

    const addName = (name: string) => {
        setName(prev => prev + "  " + name);
    }

    const [pick, setPick] = useState<BabyNamesProps[]>([]);

    const addPick = (pick: BabyNamesProps) => {
        setPick(prev => [...prev, pick])
    }



    const gender = (baby: BabyNamesProps): string => {
        if (baby.sex === 'm') {
            return 'male';
        } else {
            return 'female';
        }
    }

    return (
        <div className="nameButtons">
            <h1>Favorites:</h1>
            <div className="search-bar">
                <input value={searchTerm} 
                onChange={handleSearchTermChange}
                />
                Search term is {searchTerm}
                <div className="nameList">
                    {matches.map( Data => (
                    <div className="match" key={Data.id}>
                    <button className={gender(Data)}>{Data.name}</button>
                    </div>
                    )
                    )}
                </div>
            </div>
            <div className="picks">
                {
                    pick.map(pick => {
                        return (
                            <div className="name-pick" key={pick.id}>
                                <button className={gender(pick)}>{pick.name}</button>
                            </div>
                        )
                    }

                    )
                }
            </div>
            <div className="flex-buttons">
                {
                    BabyNamesArr.map(baby => {
                        return (

                            <div className="gendered" key={baby.id}>
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