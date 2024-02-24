import './App.css';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import form from './firebase';
import { Modal, TextField, Button } from '@material-ui/core';

// Define modal styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
};


function App() {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [signin, setSignin] = useState(false);
  const [analyticsData, setAnalyticsData] = useState(null); // To store analytics data

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlesigin=()=>{
  setsignin(false)
  }

  const handleOpenModalin = () => {
    setsignin(true);
  };

  const handleSignOut = () => {
    form.auth.signOut();
  };
  

  useEffect(() => {
    const unsubscribe = form.auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    form.db.collection('posts').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const signup_func = (event) => {
    event.preventDefault();
    form.auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        return authuser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };

  const signin_func = (event) => {
    event.preventDefault();
    form.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setSignin(false);
  };

  // Function to fetch and set analytics data
  const fetchAnalyticsData = () => {
    // Assuming you have an endpoint to fetch analytics data from Firebase
    form.db.collection('analyticsData').onSnapshot((snapshot) => {
      setAnalyticsData(snapshot.docs.map((doc) => doc.data()));
    });
  };

  // Fetch analytics data when the component mounts
  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  return (
    <div className="App">
      {/* ... (existing code) */}
      {user ? (
        <div>
          <Button variant="contained" color="white" onClick={handleSignOut}>
            Log Out
          </Button>
          {/* Render analytics data */}
          {analyticsData && (
            <div>
              <h3>Analytics Data:</h3>
              <pre>{JSON.stringify(analyticsData, null, 2)}</pre>
            </div>
          )}
        </div>
      ) : (
        <div className="sign">
          {/* ... (existing code) */}
        </div>
      )}
      {/* ... (existing code) */}
    </div>
  );
}

export default App;
