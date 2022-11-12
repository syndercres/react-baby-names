import { useState } from "react"

export default function NameInput(): JSX.Element {
    const [name,setName] = useState('');

    const addName = (name: string) =>
{
    setName(prev => prev + name);
}

return(
    <>
        <input value={name}/>
        <button onClick={() => addName('steve')}>steve</button>
    </>
)
}