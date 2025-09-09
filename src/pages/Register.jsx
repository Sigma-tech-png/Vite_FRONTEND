import { useState } from 'react';


function Register() {
const [name, setName] = useState('');
const [message, setMessage] = useState('');


const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name }),
});
const data = await res.json();
if (res.ok) {
setMessage(`✅ ${data.message}`);
setName('');
} else {
setMessage(`❌ ${data.error}`);
}
} catch (err) {
console.error(err);
setMessage('❌ Server error');
}
};


return (
<div style={{ padding: '20px' }}>
<h1>Register User</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your name"
required
/>
<button type="submit">Save</button>
</form>
{message && <p>{message}</p>}
</div>
);
}


export default Register;