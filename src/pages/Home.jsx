import { useEffect, useState } from 'react';


function Home() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div style={{ padding: '20px' }}>
            <h1>Saved Users</h1>
            <ul>
            {users.map(u => (
                <li key={u._id}>{u.name} ({new Date(u.createdAt).toLocaleString()})</li>
            ))}
            </ul>
        </div>
    );
}


export default Home;