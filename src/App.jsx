import Container from './components/Container';
import Button from './components/Button';
import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Container className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
                <Navigation />
                <h1 className="text-2xl font-bold my-4 text-center">Hello World</h1>
                <p className="mb-4 text-center">Count: {count}</p>
                <Button text="Click on me" onClick={() => setCount(count + 1)} />
            </Container>
        </div>
    );
}

export default App;
