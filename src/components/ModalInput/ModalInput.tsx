import "./style/style.css";

interface IntProps {
    placeholder: string;
    value: string;
    setValue: (val: string) => void;
}

export const ModalInput = (props: IntProps) => {
    const { placeholder, value, setValue } = props;

    return (
        <div className="input-div">
            <input
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="line"></div>
        </div>
    );
};
