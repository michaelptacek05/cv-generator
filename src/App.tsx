import { useState } from "react";
import "./styles/App.css";
import General from "./components/Forms/General";
import Education from "./components/Forms/Education";
import WorkExperience from "./components/Forms/WorkExperience";
import Render from "./components/Render";

export default function App() {
    const [generalInfo, setGeneralInfo] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const [schools, setSchools] = useState([
        { id: crypto.randomUUID(), schoolName: "", title: "", dateOfStudy: "" },
    ]);

    const [works, setWork] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "",
            position: "",
            jobDescription: "",
            startDate: "",
            endDate: "",
        },
    ]);

    const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value });
    };

    const handleSchoolChange = (
        id: string,
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { name, value } = e.target;
        setSchools(
            schools.map((school) =>
                school.id === id ? { ...school, [name]: value } : school,
            ),
        );
    };

    const handleWorkChange = (
        id: string,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setWork(
            works.map((work) =>
                work.id === id ? { ...work, [name]: value } : work,
            ),
        );
    };

    const addSchool = () => {
        setSchools([
            ...schools,
            {
                id: crypto.randomUUID(),
                schoolName: "",
                title: "",
                dateOfStudy: "",
            },
        ]);
    };

    const addWork = () => {
        setWork([
            ...works,
            {
                id: crypto.randomUUID(),
                companyName: "",
                position: "",
                jobDescription: "",
                startDate: "",
                endDate: "",
            },
        ]);
    };

    const deleteSchool = (id: string) => {
        setSchools(schools.filter((s) => s.id !== id));
    };

    const deleteWork = (id: string) => {
        setWork(works.filter((w) => w.id !== id));
    };

    return (
        <div className="flex flex-row p-20 gap-10">
            <div className="flex flex-col gap-5">
                <div className="p-5 border-1 rounded-xl border-gray-400">
                    <General data={generalInfo} onChange={handleGeneralChange} />
                </div>
                <div className="p-5 border-1 rounded-xl border-gray-400">
                    <Education
                        schools={schools}
                        onChange={handleSchoolChange}
                        onAdd={addSchool}
                        onDelete={deleteSchool}
                    />
                </div>
                <div className="p-5 border-1 rounded-xl border-gray-400">
                    <WorkExperience
                        works={works}
                        onChange={handleWorkChange}
                        onAdd={addWork}
                        onDelete={deleteWork}
                    />
                </div>
            </div>

            <div>
                <Render
                    general={generalInfo}
                    education={schools}
                    workExperience={works}
                />
            </div>
        </div>
    );
}
