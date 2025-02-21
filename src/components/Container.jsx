function Container({ children }) {
    return (
        <div className="p-4 max-w-4xl mx-auto border rounded-lg shadow-lg">

            {children}
        </div>
    );
}

export default Container;