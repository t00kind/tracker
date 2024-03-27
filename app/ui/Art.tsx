export default function Hab({title}) {
    return (
        <div className="origin">
            <h1>{title}</h1>
            <b>Are your ready?</b><br />
            <input type="checkbox" /> <b />
            <button className="btn">Отъебашить</button>
        </div>
    );
}