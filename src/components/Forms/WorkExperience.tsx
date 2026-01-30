import { useState } from "react";


export default function WorkExperience() {
    const [work, setWork] = useState({
        companyName: '',
        position: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setWork({ ...work, [name]: value });
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