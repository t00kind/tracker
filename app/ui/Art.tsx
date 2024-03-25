export default function Hab({title}) {
    return (
        <div className="origin">
            <h1>{title}</h1>
            <b>How much?</b><br />
            <input type="number" /> <b />
            <button className="btn">Отъебашить</button>
        </div>
    );
}