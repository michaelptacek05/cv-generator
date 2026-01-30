import { useState } from "react";


export default function Education() {
    const [school, setSchool] = useState({
        schoolName: '',
        title: '',
        dateOfStudy: '',
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSchool({ ...school, [name]: value });
    };

    if (isEditing) {
        return (
            <div>
                <h2>Vzdělání</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setIsEditing(false);
                    }}
                >
                    <label>
                        Název školy
                        <input
                            type="text"
                            name="schoolName"
                            value={school.schoolName}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Dokončený titul
                        <input
                            type="text"
                            name="title"
                            value={school.title}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Roky studia
                        <input
                            type="date"
                            name="dateOfStudy"
                            value={school.dateOfStudy}
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
                <h2>{school.schoolName}</h2>
                <p>{school.title}</p>
                <p>{school.dateOfStudy}</p>
                <button onClick={() => setIsEditing(true)}>Upravit</button>
            </div>
        );
    }
}