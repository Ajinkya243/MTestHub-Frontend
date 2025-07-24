import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faGlobe,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://mtesthub-backend.onrender.com/api/user');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {users?.length > 0 &&
        users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[45%] bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 p-4">
      <div className="flex items-center justify-center w-full md:w-1/3 bg-gray-100 p-4">
        <h2 className="text-3xl font-bold text-gray-700">
          {user?.firstName?.[0]}{user?.lastName?.[0]}
        </h2>
      </div>
      <div className="w-full md:w-2/3 p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 flex justify-between">
          {user?.firstName} {user?.lastName}
          <FontAwesomeIcon icon={faPenToSquare} />

        </h2>
        <p><FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />{user?.email}</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-2" />{user?.address}</p>
        <p><FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />{user?.phone}</p>
        <p><FontAwesomeIcon icon={faGlobe} className="text-gray-600 mr-2" />{user?.website}</p>
        <div className="flex items-center mt-4">
          <img src={user?.imageUrl} alt="Logo" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h3 className="font-medium text-gray-700 flex items-center">
              <FontAwesomeIcon icon="building" className="mr-2" />{user?.company}
            </h3>
            <p className="text-sm text-gray-600">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
