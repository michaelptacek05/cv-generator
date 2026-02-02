import "../styles/App.css";

interface School {
    id: string;
    schoolName: string;
    title: string;
    dateOfStudy: string;
}

interface General {
    fullName: string;
    email: string;
    phone: string;
}

interface Work {
    id: string;
    companyName: string;
    position: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
}

interface Render {
    general: General;
    education: School[];
    workExperience: Work[];
}

export default function Render({ general, education, workExperience }: Render) {
    return (
        <div>
            <div className="p-4">
                <h1 className="pb-4 font-bold font-serif text-2xl">{general.fullName || "Tvé Jméno"}</h1>
                <div>
                    {general.email && <span>{general.email}</span>}
                    {general.email && general.phone && <span> | </span>}
                    {general.phone && <span>{general.phone}</span>}
                </div>
            </div>

            {education.length > 0 && (
                <div className="p-4">
                    <h3 className="pb-4 font-bold font-serif text-xl">Vzdělání</h3>
                    {education.map((school) => (
                        <div key={school.id}>
                            <div>                                
                                    {school.schoolName && <span>{school.schoolName}</span>}
                                    {school.schoolName && school.dateOfStudy && <span> | </span>}
                                    {school.dateOfStudy && <span>{school.dateOfStudy}</span>}
                            </div>
                            <div>{school.title}</div>
                        </div>
                    ))}
                </div>
            )}

            {workExperience.length > 0 && (
                <div className="p-4">
                    <h3 className="pb-4 font-bold font-serif text-xl">Pracovní zkušenost</h3>
                    {workExperience.map((work) => (
                        <div key={work.id}>
                            <div className="flex flex-col gap-2">
                                <span>{work.companyName}</span>
                                <span>{work.position}</span>
                                <span>{work.jobDescription}</span>
                                <span>{work.startDate}</span>
                                <span>{work.endDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
