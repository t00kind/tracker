export default function Da() {
    const da = new Date();
    const Ms = ["JNV", "FBR", "MRCH"]
    const m = da.getMonth()
    const d = da.getDate()

    return (
        <h1>
            {d} {Ms[m]},
        </h1>
    )
}