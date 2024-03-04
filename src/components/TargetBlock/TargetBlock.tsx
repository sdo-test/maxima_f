import "./style/style.css";

interface IntProps {
    img: string;
    title: string | React.ReactNode;
    desc: string | React.ReactNode;
    gap: string;
    gap_text: string;
}

export const TargetBlock = (props: IntProps) => {
    const { img, title, desc, gap, gap_text } = props;

    return (
        <div className="target" style={{ gap: gap }}>
            <img src={img} alt="logo" />
            <div className="target__text" style={{ gap: gap_text }}>
                <span className="target__title">{title}</span>
                <span className="target__desc">{desc}</span>
            </div>
        </div>
    );
};
