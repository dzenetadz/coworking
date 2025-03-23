import React, { useState } from 'react';

const EditButton = ({ title, description, price, onSave }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: title || '',
    description: description || '',
    price: price || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    setModalOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Edit button placed at top-right of the pricing box */}
      <button onClick={() => setModalOpen(true)} className="edit-button">
        <i className="mdi mdi-pencil"></i>
      </button>

      {/* Modal Overlay */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Edit Details</h4>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditButton;