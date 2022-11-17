
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
const MaleNamesArr: BabyNamesProps[] = Data.filter(Data => Data.sex === "m");
const FemaleNamesArr: BabyNamesProps[] = Data.filter(Data => Data.sex === "f");

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

    const [genderFilter,setGenderFilter] = useState("x");
    const FilterNamesMale = ()=>{
        setGenderFilter("m");
    }


    const FilterNamesFemale = ()=>{
        setGenderFilter("f");
    }

    const FilterNamesNone = ()=>{
        setGenderFilter("x");
    }


    function filterDone(gender:string): BabyNamesProps[]{
        if(genderFilter==="m"){
            return MaleNamesArr;
        }
        if(genderFilter==="f"){
            return FemaleNamesArr;
        }
        if(genderFilter==="x"){
            return BabyNamesArr;
        }
        return [];
    }


    const matches = matchingNames(searchTerm, filterDone(genderFilter));
    
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
           
            <div className="search-bar">
                <div className="flex-buttons">
                <button className="favorites" onClick={FilterNamesMale}>filter male</button>
                <button className="favorites" onClick={FilterNamesFemale}>filter female</button>
                <button className="favorites"onClick={FilterNamesNone}>filter none</button>
                </div>
                <input value={searchTerm} 
                onChange={handleSearchTermChange}
                />
                

                <div className="picks">
                    <h1 className="favorites">Favorites:</h1>
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
                <div className="gendered flex-buttons">
                    {matches.map( Data => (
                    <div className="match" key={Data.id}>
                    <button className={gender(Data)} onClick=
                                    {() => {
                                        addName(Data.name)
                                        addPick(Data)
                                    }
                                    }>{Data.name}</button>
                    </div>
                    )
                    )}
                </div>
            </div>


        </div>
    );
}