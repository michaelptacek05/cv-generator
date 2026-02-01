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
            <div>
                <h1>{general.fullName || "Tvé Jméno"}</h1>
                <div className="contact-info">
                    {general.email && <span>{general.email}</span>}
                    {general.email && general.phone && <span> | </span>}
                    {general.phone && <span>{general.phone}</span>}
                </div>
            </div>

            {education.length > 0 && (
                <div className="cv-section">
                    <h3 className="section-title">Vzdělání</h3>
                    {education.map((school) => (
                        <div key={school.id} className="cv-item">
                            <div className="cv-item-header">
                                <span className="bold">
                                    {school.schoolName}
                                </span>
                                <span>{school.dateOfStudy}</span>
                            </div>
                            <div>{school.title}</div>
                        </div>
                    ))}
                </div>
            )}

            {workExperience.length > 0 && (
                <div>
                    <h3>Pracovní zkušenost</h3>
                    {workExperience.map((work) => (
                        <div key={work.id}>
                            <span>{work.companyName}</span>
                            <span>{work.position}</span>
                            <span>{work.jobDescription}</span>
                            <span>{work.startDate}</span>
                            <span>{work.endDate}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
