import "./style/style.css";

interface IntProps {
    title: string | React.ReactNode;
    desc: string | React.ReactNode;
    gap: string;
}

export const SuitBlock = (props: IntProps) => {
    const { title, desc, gap } = props;

    return (
        <div className="suit-block">
            <h3 className="suit-block__title" style={{ marginBottom: gap }}>
                {title}
            </h3>
            <span className="suit-block__desc">{desc}</span>
        </div>
    );
};
