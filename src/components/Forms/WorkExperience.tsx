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
        <div className="w-xs">
            <h3 className="pb-4 font-bold font-serif text-xl">Pracovní zkušenost</h3>

            {works.map((work) => (
                <div
                    key={work.id}
                    className="flex gap-3 flex-col"
                >
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">
                            Název společnosti
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={work.companyName}
                            onChange={(e) => onChange(work.id, e)}
                            placeholder="Společnost s.r.o."
                            className="p-4 border rounded-xl border-gray-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">
                            Název pozice
                        </label>
                        <input
                            type="text"
                            name="position"
                            value={work.position}
                            onChange={(e) => onChange(work.id, e)}
                            placeholder="Název pozice"
                            className="p-4 border rounded-xl border-gray-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">
                            Popis práce
                        </label>
                        <textarea
                            name="jobDescription"
                            value={work.jobDescription}
                            onChange={(e) => onChange(work.id, e)}
                            placeholder="Popis, co jste dělali"
                            className="p-4 border rounded-xl border-gray-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">
                            Datum nástupu
                        </label>
                        <input
                            type="date"
                            name="startDate"
                            value={work.startDate}
                            onChange={(e) => onChange(work.id, e)}
                            className="p-4 border rounded-xl border-gray-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold">
                            Datum konce
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            value={work.endDate}
                            onChange={(e) => onChange(work.id, e)}
                            className="p-4 border rounded-xl border-gray-400"
                        />
                        
                    </div>
                    <div className="pb-5 flex flex-col">
                        <button 
                            onClick={() => onDelete(work.id)}
                            className="py-2 px-4 bg-red-500 text-white rounded-xl cursor-pointer hover:bg-red-700"
                        >
                            Smazat
                        </button>
                    </div>
                </div>
            ))}

            <button
                onClick={onAdd}
                className="py-2 px-4 bg-blue-500 text-white rounded-xl cursor-pointer hover:bg-blue-700"
            >
                Přidat pracovní pozici
            </button>
        </div>
    );
}
