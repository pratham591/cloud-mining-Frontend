import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/mining-stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching mining stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2>Mining Dashboard</h2>
      <p>Hash Power: {stats.hashPower}</p>
      <p>Earnings: {stats.earnings}</p>
    </div>
  );
};

export default Dashboard;
