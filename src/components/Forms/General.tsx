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
        <div className="flex flex-col gap-3 w-xs">
            <h3 className="pb-4 font-bold font-serif text-xl">Osobní údaje</h3>
            <div className="flex flex-col">
                <label className="text-xs font-bold">Jméno</label>
                <input
                    type="text"
                    name="fullName"
                    value={data.fullName}
                    onChange={onChange}
                    placeholder="Jan Novák"
                    className="p-4 border rounded-xl border-gray-400"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs font-bold">Email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChange}
                    placeholder="jan@novak.com"
                    className="p-4 border rounded-xl border-gray-400"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs font-bold">Telefon</label>
                <input
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={onChange}
                    placeholder="+420 123 456 789"
                    className="p-4 border rounded-xl border-gray-400"
                />
            </div>
        </div>
    );
}
