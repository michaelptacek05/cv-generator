import { useState } from "react";


export default function General() {
    const [person, setPerson] = useState({
        fullName: '',
        email: '',
        phone: '',
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    if (isEditing) {
        return (
            <div>
                <h2>Základní údaje</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setIsEditing(false);
                    }}
                >
                    <label>
                        Jméno
                        <input
                            type="text"
                            name="fullName"
                            value={person.fullName}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        E-mail
                        <input
                            type="email"
                            name="email"
                            value={person.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Telefonní číslo
                        <input
                            type="tel"
                            name="phone"
                            value={person.phone}
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
                <h2>{person.fullName}</h2>
                <p>{person.email}</p>
                <p>{person.phone}</p>
                <button onClick={() => setIsEditing(true)}>Upravit</button>
            </div>
        );
    }
}