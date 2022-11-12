
import Data from './babyNamesData.json'

interface BabyNamesProps {
    id: number;
    name: string;
    sex: string;
}
const BabyNamesArr: BabyNamesProps [] = Data;


export default function NameButtons(){
    return(
        <div className="nameButtons">
            {
                Data.map( baby => {
                    return(
                        <div className="button" key={baby.id}>
                            <strong>{baby.name}</strong>
                        </div>
                    )
                })
            }
        </div>
    );
}