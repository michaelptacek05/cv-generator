interface Work {
    id: string;
    companyName: string;
    position: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
}

interface WorkExperienceProps {
    works: Work[];
    onChange: (
        id: string,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onAdd: () => void;
    onDelete: (id: string) => void;
}

export default function WorkExperience({
    works,
    onChange,
    onAdd,
    onDelete,
}: WorkExperienceProps) {
    return (
        <div>
            <h3>Pracovní zkušenost</h3>

            {works.map((work) => (
                <div
                    key={work.id}
                    style={{
                        borderBottom: "1px solid #ddd",
                        marginBottom: "15px",
                        paddingBottom: "10px",
                    }}
                >
                    <div>
                        <label>
                            Název společnosti
                            <input
                                type="text"
                                name="companyName"
                                value={work.companyName}
                                onChange={(e) => onChange(work.id, e)}
                                placeholder="Společnost s.r.o."
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Název pozice
                            <input
                                type="text"
                                name="position"
                                value={work.position}
                                onChange={(e) => onChange(work.id, e)}
                                placeholder="Název pozice"
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Popis práce
                            <textarea
                                name="jobDescription"
                                value={work.jobDescription}
                                onChange={(e) => onChange(work.id, e)}
                                placeholder="Popis, co jste dělali"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Datum nástupu
                            <input
                                type="date"
                                name="startDate"
                                value={work.startDate}
                                onChange={(e) => onChange(work.id, e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Datum konce
                            <input
                                type="date"
                                name="endDate"
                                value={work.endDate}
                                onChange={(e) => onChange(work.id, e)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="button" onClick={() => onDelete(work.id)}>
                            Smazat
                        </button>
                    </div>
                </div>
            ))}

            <button onClick={onAdd}>Přidat pracovní zkušenost</button>
        </div>
    );
}
