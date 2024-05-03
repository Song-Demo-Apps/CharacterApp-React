export default function Error() {
    return <>
    <div className="mt-5 d-flex asign-items-center justify-content-center h-100 fs-3 text-info" >
        <div className="vstack">
            <div>
            Oops, something went wrong on our side! Please try again in a bit.
            </div>
            <div>
            (It's most likely the database is asleep. Please refresh to reload the data)
            </div>
        </div>
    </div>
    </>
}