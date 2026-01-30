import { useState } from "react";

interface Education {
    id: string;
    schoolName: string;
    title: string;
    dateOfStudy: string;
}

export default function Education() {
    const [schools, setSchools] = useState<Education[]>([]);
    const [isEditing, setIsEditing] = useState(true);

    const addSchool = () => {
        const newSchool: Education = {
            id: crypto.randomUUID(),
            schoolName: '',
            title: '',
            dateOfStudy: ''
        };
        setSchools([...schools, newSchool]);
    };

    const deleteSchool = (id: string) => {
        setSchools(schools.filter(school => school.id !== id));
    };

    const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        const updatedSchools = schools.map(school => {
            if (school.id === id) {
                return { ...school, [name]: value };
            }
            return school;
        });

        setSchools(updatedSchools);
    };

    if (isEditing) {
        return (
            <div>
                <h2>Vzdělání</h2>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        setIsEditing(false);
                    }}>
                    
                    {schools.map((school) => (
                        <div key={school.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "20px", paddingBottom: "10px" }}>
                            <label>
                                Název školy
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={school.schoolName}
                                    onChange={(e) => handleChange(school.id, e)}
                                />
                            </label>

                            <label>
                                Dokončený titul
                                <input
                                    type="text"
                                    name="title"
                                    value={school.title}
                                    onChange={(e) => handleChange(school.id, e)}
                                />
                            </label>

                            <label>
                                Roky studia
                                <input
                                    type="text"
                                    name="dateOfStudy"
                                    value={school.dateOfStudy}
                                    onChange={(e) => handleChange(school.id, e)}
                                />
                            </label>
                            
                            <button type="button" onClick={() => deleteSchool(school.id)}>
                                Smazat tuto školu
                            </button>
                        </div>
                    ))}

                    <button type="button" onClick={addSchool} style={{ marginBottom: "10px", display: "block" }}>
                        + Přidat další školu
                    </button>

                    <button type="submit">Uložit vše</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Vzdělání</h2>
                {schools.length === 0 && <p>Žádné vzdělání nebylo zadáno.</p>}
                
                {schools.map(school => (
                    <div key={school.id} style={{ marginBottom: "15px" }}>
                        <h3>{school.schoolName}</h3>
                        <p>{school.title}, {school.dateOfStudy}</p>
                    </div>
                ))}
                
                <button onClick={() => setIsEditing(true)}>Upravit</button>
            </div>
        );
    }
}