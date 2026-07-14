import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Papa from 'papaparse';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const API_URL = 'http://localhost:5000/api/campaigns';

function CampaignManager() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [newCampaign, setNewCampaign] = useState({
  name: '',
  platform: '',
  spend: 0,
  revenue: 0,
  status: 'Active'
});

  // Fetch campaigns
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(API_URL);
      setCampaigns(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  // Add campaign
  const addCampaign = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newCampaign);
      setCampaigns([...campaigns, response.data]);
      setNewCampaign({ name: '', platform: '', spend: 0, revenue: 0, status: 'Active' });
    } catch (error) {
      console.error('Error adding campaign:', error);
      alert('Failed to add campaign. Make sure the backend is running.');
    }
  };

  // Delete campaign
  const deleteCampaign = async (id) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setCampaigns(campaigns.filter(c => c.id !== id));
      } catch (error) {
        console.error('Error deleting campaign:', error);
        alert('Failed to delete campaign. Make sure the backend is running.');
      }
    }
  };

  // Update campaign
  const updateCampaign = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      setCampaigns(campaigns.map(c => c.id === id ? response.data : c));
      setEditingCampaign(null);
    } catch (error) {
      console.error('Error updating campaign:', error);
      alert('Failed to update campaign. Make sure the backend is running.');
    }
  };

  // Filter campaigns
  const filteredCampaigns = campaigns
    .filter(c => filterStatus === 'All' || c.status === filterStatus)
    .filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Sort campaigns
  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];
    if (sortBy === 'name' || sortBy === 'platform' || sortBy === 'status') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  // Calculate metrics
  const totalSpend = campaigns.reduce((sum, c) => sum + c.spend, 0);
  const totalRevenue = campaigns.reduce((sum, c) => sum + c.revenue, 0);
  const totalRoas = totalSpend > 0 ? (totalRevenue / totalSpend) : 0;
  const activeCampaigns = campaigns.filter(c => c.status === 'Active').length;

  // Chart data
  const chartData = {
    labels: campaigns.map(c => c.name),
    datasets: [
      {
        label: 'Spend ($)',
        data: campaigns.map(c => c.spend),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Revenue ($)',
        data: campaigns.map(c => c.revenue),
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Campaign Performance',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Export CSV
  const exportCSV = () => {
    const csv = Papa.unparse(campaigns);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'campaigns.csv';
    link.click();
  };

  if (loading) return <div style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>Loading campaigns...</div>;

  return (
    <section style={{ marginTop: '60px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>
        📊 Campaign Manager
      </h2>
      <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '17px' }}>
        Create and manage your ad campaigns.
      </p>

      {/* Metrics Dashboard */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          background: 'var(--card-bg)',
          padding: '16px',
          borderRadius: '10px',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Total Spend</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#3b82f6' }}>
            ${totalSpend.toLocaleString()}
          </div>
        </div>
        <div style={{
          background: 'var(--card-bg)',
          padding: '16px',
          borderRadius: '10px',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Total Revenue</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#22c55e' }}>
            ${totalRevenue.toLocaleString()}
          </div>
        </div>
        <div style={{
          background: 'var(--card-bg)',
          padding: '16px',
          borderRadius: '10px',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Avg ROAS</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#f59e0b' }}>
            {totalRoas.toFixed(2)}x
          </div>
        </div>
        <div style={{
          background: 'var(--card-bg)',
          padding: '16px',
          borderRadius: '10px',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Active Campaigns</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#8b5cf6' }}>
            {activeCampaigns} / {campaigns.length}
          </div>
        </div>
      </div>

      {/* Chart */}
      {campaigns.length > 0 && (
        <div style={{
          background: 'var(--card-bg)',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: 'var(--shadow)',
          marginBottom: '24px'
        }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}

      {/* Toolbar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '24px',
        alignItems: 'center'
      }}>
        <input
          type="text"
          placeholder="🔍 Search campaigns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid var(--light-gray)',
            borderRadius: '6px',
            background: 'var(--bg)',
            color: 'var(--text)',
            flex: '1',
            minWidth: '200px'
          }}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid var(--light-gray)',
            borderRadius: '6px',
            background: 'var(--bg)',
            color: 'var(--text)'
          }}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
          <option value="Ended">Ended</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid var(--light-gray)',
            borderRadius: '6px',
            background: 'var(--bg)',
            color: 'var(--text)'
          }}
        >
          <option value="name">Sort by Name</option>
          <option value="spend">Sort by Spend</option>
          <option value="revenue">Sort by Revenue</option>
          <option value="status">Sort by Status</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          style={{
            padding: '10px 16px',
            background: 'var(--light-gray)',
            border: 'none',
            borderRadius: '6px',
            color: 'var(--text)',
            cursor: 'pointer'
          }}
        >
          {sortOrder === 'asc' ? '↑ Asc' : '↓ Desc'}
        </button>

        <button
          onClick={exportCSV}
          style={{
            padding: '10px 16px',
            background: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          📥 Export CSV
        </button>
      </div>

      {/* Add Campaign Form */}
      <form onSubmit={addCampaign} style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '12px',
  background: 'var(--card-bg)',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: 'var(--shadow)',
  marginBottom: '24px'
}}>
  <input
    type="text"
    placeholder="Campaign Name"
    value={newCampaign.name}
    onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
    style={{
      padding: '10px',
      border: '1px solid var(--light-gray)',
      borderRadius: '6px',
      background: 'var(--bg)',
      color: 'var(--text)'
    }}
    required
  />
  <input
    type="text"
    placeholder="Platform"
    value={newCampaign.platform}
    onChange={(e) => setNewCampaign({ ...newCampaign, platform: e.target.value })}
    style={{
      padding: '10px',
      border: '1px solid var(--light-gray)',
      borderRadius: '6px',
      background: 'var(--bg)',
      color: 'var(--text)'
    }}
    required
  />
  <input
    type="number"
    placeholder="Spend ($)"
    value={newCampaign.spend || ''}
    onChange={(e) => {
      const val = e.target.value === '' ? 0 : Number(e.target.value);
      setNewCampaign({ ...newCampaign, spend: val });
    }}
    style={{
      padding: '10px',
      border: '1px solid var(--light-gray)',
      borderRadius: '6px',
      background: 'var(--bg)',
      color: 'var(--text)'
    }}
  />
  <input
    type="number"
    placeholder="Revenue ($)"
    value={newCampaign.revenue || ''}
    onChange={(e) => {
      const val = e.target.value === '' ? 0 : Number(e.target.value);
      setNewCampaign({ ...newCampaign, revenue: val });
    }}
    style={{
      padding: '10px',
      border: '1px solid var(--light-gray)',
      borderRadius: '6px',
      background: 'var(--bg)',
      color: 'var(--text)'
    }}
  />
  <button
    type="submit"
    style={{
      padding: '10px',
      background: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 600,
      cursor: 'pointer'
    }}
  >
    + Add Campaign
  </button>
</form>

      {/* Campaign List */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {sortedCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            style={{
              background: 'var(--card-bg)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow)',
              borderLeft: `4px solid ${campaign.status === 'Active' ? '#22c55e' : campaign.status === 'Paused' ? '#f59e0b' : '#ef4444'}`
            }}
          >
            {editingCampaign?.id === campaign.id ? (
              <div>
                <input
                  type="text"
                  value={editingCampaign.name}
                  onChange={(e) => setEditingCampaign({ ...editingCampaign, name: e.target.value })}
                  style={{ width: '100%', padding: '6px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                  type="text"
                  value={editingCampaign.platform}
                  onChange={(e) => setEditingCampaign({ ...editingCampaign, platform: e.target.value })}
                  style={{ width: '100%', padding: '6px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                  type="number"
                  value={editingCampaign.spend}
                  onChange={(e) => setEditingCampaign({ ...editingCampaign, spend: Number(e.target.value) })}
                  style={{ width: '100%', padding: '6px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                  type="number"
                  value={editingCampaign.revenue}
                  onChange={(e) => setEditingCampaign({ ...editingCampaign, revenue: Number(e.target.value) })}
                  style={{ width: '100%', padding: '6px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <select
                  value={editingCampaign.status}
                  onChange={(e) => setEditingCampaign({ ...editingCampaign, status: e.target.value })}
                  style={{ width: '100%', padding: '6px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  <option value="Active">Active</option>
                  <option value="Paused">Paused</option>
                  <option value="Ended">Ended</option>
                </select>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => updateCampaign(campaign.id, editingCampaign)}
                    style={{
                      background: '#22c55e',
                      color: 'white',
                      border: 'none',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingCampaign(null)}
                    style={{
                      background: '#64748b',
                      color: 'white',
                      border: 'none',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', color: 'var(--text)' }}>{campaign.name}</h3>
                <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>
                  {campaign.platform}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  marginBottom: '8px',
                  color: 'var(--text)'
                }}>
                  <span>Spend: <strong>${campaign.spend.toLocaleString()}</strong></span>
                  <span>Revenue: <strong>${campaign.revenue.toLocaleString()}</strong></span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: campaign.status === 'Active' ? '#dcfce7' : campaign.status === 'Paused' ? '#fef9c3' : '#fee2e2',
                    color: campaign.status === 'Active' ? '#16a34a' : campaign.status === 'Paused' ? '#ca8a04' : '#dc2626',
                    padding: '2px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}>
                    {campaign.status}
                  </span>
                  <div>
                    <button
                      onClick={() => setEditingCampaign(campaign)}
                      style={{
                        background: '#f59e0b',
                        color: 'white',
                        border: 'none',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginRight: '8px'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCampaign(campaign.id)}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: '8px', fontSize: '13px', color: '#64748b' }}>
                  ROAS: <strong>{(campaign.revenue / campaign.spend).toFixed(2)}x</strong>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedCampaigns.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#64748b',
          background: 'var(--card-bg)',
          borderRadius: '12px',
          boxShadow: 'var(--shadow)'
        }}>
          No campaigns found. Try adjusting your filters or add a new campaign.
        </div>
      )}
    </section>
  );
}

export default CampaignManager;