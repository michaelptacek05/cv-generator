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
        <div className="w-xs">
            <h3 className="pb-4 font-bold font-serif text-xl">Vzdělání</h3>

            {schools.map((school) => (
                <div
                    key={school.id}
                    className="flex gap-3 flex-col"
                >
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">
                            Název školy
                        </label>
                        <input
                                type="text"
                                name="schoolName"
                                value={school.schoolName}
                                onChange={(e) => onChange(school.id, e)}
                                placeholder="Název školy"
                                className="p-4 border rounded-xl border-gray-400"
                            />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">Vystudovaný titul</label>
                        <input
                            type="text"
                            name="title"
                            value={school.title}
                            onChange={(e) => onChange(school.id, e)}
                            placeholder="Titul"
                            className="p-4 border rounded-xl border-gray-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">Roky studia</label>
                        <input
                            type="text"
                            name="dateOfStudy"
                            value={school.dateOfStudy}
                            onChange={(e) => onChange(school.id, e)}
                            placeholder="Roky studia"
                            className="p-4 border rounded-xl border-gray-400"
                        />
                    </div>
                    <div className="pb-5 flex flex-col">
                        <button 
                            onClick={() => onDelete(school.id)}
                            className="py-2 px-4 bg-red-500 text-white rounded-xl w-full cursor-pointer hover:bg-red-700"
                        >
                            Smazat
                        </button>
                    </div>
                </div>
            ))}

            <button
                onClick={onAdd}
                className="py-2 px-4 bg-blue-500 text-white rounded-xl w-full cursor-pointer hover:bg-blue-700"
            >
                Přidat školu
            </button>
        </div>
    );
}
