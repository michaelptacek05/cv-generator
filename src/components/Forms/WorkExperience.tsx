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
    const [work, setWork] = useState<Work[]>([]);
    const [isEditing, setIsEditing] = useState(true);

    const addWork = () => {
        const newWork: Work = {
            id: crypto.randomUUID();
            companyName: '',
            position: '',
            jobDescription: '',
            startDate: '',
            endDate: '',    
        }
        setWork([...ServiceWorkerRegistration, newWork]);
    };

    const deleteWork = (id: string) => {
        setWork(works.filter(works => work.id !== id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                    }}
                >
                    <label>
                        Název společnosti
                        <input
                            type="text"
                            name="companyName"
                            value={work.companyName}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Název pozice
                        <input
                            type="text"
                            name="position"
                            value={work.position}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Popis práce
                        <textarea
                            name="jobDescription"
                            value={work.jobDescription}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Datum nástupu
                        <input
                            type="date"
                            name="startDate"
                            value={work.startDate}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Datum konce
                        <input
                            type="date"
                            name="endDate"
                            value={work.endDate}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit">Potvrdit</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h2>{work.companyName}</h2>
                <p>{work.position}</p>
                <p>{work.jobDescription}</p>
                <p>{work.startDate}</p>
                <p>{work.endDate}</p>
                <button onClick={() => setIsEditing(true)}>Upravit</button>
            </div>
        );
    }
}