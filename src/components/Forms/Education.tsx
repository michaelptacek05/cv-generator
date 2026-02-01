interface School {
    id: string;
    schoolName: string;
    title: string;
    dateOfStudy: string;
}

interface EducationProps {
    schools: School[];
    onChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    onDelete: (id: string) => void;
}

export default function Education({
    schools,
    onChange,
    onAdd,
    onDelete,
}: EducationProps) {
    return (
        <div className="section-form">
            <h3>Vzdělání</h3>

            {schools.map((school) => (
                <div
                    key={school.id}
                    style={{
                        borderBottom: "1px solid #ddd",
                        marginBottom: "15px",
                        paddingBottom: "10px",
                    }}
                >
                    <div>
                        <input
                            type="text"
                            name="schoolName"
                            value={school.schoolName}
                            onChange={(e) => onChange(school.id, e)}
                            placeholder="Název školy"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={school.title}
                            onChange={(e) => onChange(school.id, e)}
                            placeholder="Titul"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="dateOfStudy"
                            value={school.dateOfStudy}
                            onChange={(e) => onChange(school.id, e)}
                            placeholder="Roky studia"
                        />
                    </div>
                    <div>
                        <button onClick={() => onDelete(school.id)}>
                            Smazat
                        </button>
                    </div>
                </div>
            ))}

            <button onClick={onAdd}>Přidat školu</button>
        </div>
    );
}
