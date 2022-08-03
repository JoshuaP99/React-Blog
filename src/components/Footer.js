const Footer = () => {
    const today = new Date()
    return (
        <footer className="Footer">
            <p>Joshua Pacheco &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer