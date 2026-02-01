import { useState } from "react";

interface Work {
    id: string;
    companyName: string,
    position: string,
    jobDescription: string,
    startDate: string,
    endDate: string,
}

export default function WorkExperience() {
    const [works, setWork] = useState<Work[]>([]);
    const [isEditing, setIsEditing] = useState(true);

    const addWork = () => {
        const newWork: Work = {
            id: crypto.randomUUID(),
            companyName: '',
            position: '',
            jobDescription: '',
            startDate: '',
            endDate: '',    
        }
        setWork([...works, newWork]);
    };

    const deleteWork = (id: string) => {
        setWork(works.filter(works => works.id !== id));
    }

    const handleChange = (id: string ,e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        const updatedWorks = works.map(work => {
            if (work.id === id) {
                return {...work, [name]: value};
            }
            return work;
        });

        setWork(updatedWorks);
    };


    if (isEditing) {
        return (
            <div>
                <h2>Pracovní zkušenost</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setIsEditing(false);
                    }}>

                    {works.map((work) => (
                        <div>
                            <label>
                                Název společnosti
                                <input
                                    type="text"
                                    name="companyName"
                                    value={work.companyName}
                                    onChange={(e) => handleChange(work.id, e)}
                                />
                            </label>

                            <label>
                                Název pozice
                                <input
                                    type="text"
                                    name="position"
                                    value={work.position}
                                    onChange={(e) => handleChange(work.id, e)}
                                />
                            </label>

                            <label>
                                Popis práce
                                <textarea
                                    name="jobDescription"
                                    value={work.jobDescription}
                                    onChange={(e) => handleChange(work.id, e)}
                                />
                            </label>

                            <label>
                                Datum nástupu
                                <input
                                    type="date"
                                    name="startDate"
                                    value={work.startDate}
                                    onChange={(e) => handleChange(work.id, e)}
                                />
                            </label>

                            <label>
                                Datum konce
                                <input
                                    type="date"
                                    name="endDate"
                                    value={work.endDate}
                                    onChange={(e) => handleChange(work.id, e)}
                                />
                            </label>

                            <button type="button" onClick={() => deleteWork(work.id)}>
                                Smazat tuto školu
                            </button>
                        </div>
                    ))}        
                    
                    <button type="button" onClick={addWork} style={{ marginBottom: "10px", display: "block" }}>
                        + Přidat další školu
                    </button>

                    <button type="submit">Potvrdit</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                {works.length === 0 && <p>Nebyla přidaná žádná pracovní zkušenost</p>}

                {works.map(work => (
                    <div key={work.id} style={{ marginBottom: "15px" }}>
                        <h2>{work.companyName}</h2>
                        <p>{work.position}</p>
                        <p>{work.jobDescription}</p>
                        <p>{work.startDate}</p>
                        <p>{work.endDate}</p>
                    </div>
                ))}
                
                <button onClick={() => setIsEditing(true)}>Upravit</button>
            </div>
        );
    }
}