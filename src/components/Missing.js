import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <main className="Missing">
            <h2>Post Not Found</h2>
            <p>
                <Link to='/'>Go Home</Link>
            </p>
        </main>
    )
}

export default Missing