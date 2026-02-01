interface GeneralProps {
    data: {
        fullName: string;
        email: string;
        phone: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function General({ data, onChange }: GeneralProps) {
    return (
        <div>
            <h3>Osobní údaje</h3>
            <div>
                <label>Jméno</label>
                <input
                    type="text"
                    name="fullName"
                    value={data.fullName}
                    onChange={onChange}
                    placeholder="Jan Novák"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChange}
                    placeholder="jan@novak.com"
                />
            </div>
            <div>
                <label>Telefon</label>
                <input
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={onChange}
                    placeholder="+420 123 456 789"
                />
            </div>
        </div>
    );
}
