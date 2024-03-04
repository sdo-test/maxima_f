import "./style/style.css";

interface IntProps {
    title: string;
    vars: string[] | React.ReactNode[];
    marginRight: string;
}

export const ContactsMenu = (props: IntProps) => {
    const { title, vars, marginRight } = props;

    return (
        <div className="contacts__menu" style={{ marginRight: marginRight }}>
            <span className="menu__title">{title}</span>
            <div className="menu__vars">
                {vars.map((val, idx) => (
                    <span key={idx} className="menu__var">
                        {val}
                    </span>
                ))}
            </div>
        </div>
    );
};
