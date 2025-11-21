import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Gallery.css';

const clubOptions = [
  'Vibiinz',
  'Chitkara Meridian',
  'Literature Club',
  'IEEE CUIET',
  'GFG CUIET',
  'ACM Student Chapter',
  'Design Thinking Club',
  'Coding Ninjas Chapter',
];

function Gallery() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [club, setClub] = useState('');
  const [date, setDate] = useState('');
  const [photos, setPhotos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const [filterClub, setFilterClub] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [onlyMine, setOnlyMine] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('uwall-current-user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch {
        setCurrentUser(null);
      }
    }

    const storedPhotos = localStorage.getItem('uwall-gallery');
    let initialPhotos = [];
    if (storedPhotos) {
      try {
        initialPhotos = JSON.parse(storedPhotos) || [];
      } catch {
        initialPhotos = [];
      }
    }

    if (!Array.isArray(initialPhotos)) {
      initialPhotos = [];
    }

    if (initialPhotos.length === 0) {
      const now = Date.now();
      initialPhotos = [
        {
          id: now,
          dataUrl:
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23f5f5f5"/><text x="50%" y="40%" text-anchor="middle" font-family="sans-serif" font-size="22" fill="%23999">24-Hour Hackathon Winners</text><text x="50%" y="58%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23b71c1c">IEEE CUIET • Sample Photo</text></svg>',
          caption: '24-Hour Hackathon winners (sample)',
          club: 'IEEE CUIET',
          date: '2025-11-25',
          uploadedBy: 'uWall Team',
        },
        {
          id: now + 1,
          dataUrl:
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23f5f5f5"/><text x="50%" y="40%" text-anchor="middle" font-family="sans-serif" font-size="22" fill="%23999">Campus Placements</text><text x="50%" y="58%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23627d32">Placement Highlights • Sample Photo</text></svg>',
          caption: 'Placement highlights (sample)',
          club: 'GFG CUIET',
          date: '2025-11-20',
          uploadedBy: 'uWall Team',
        },
        {
          id: now + 2,
          dataUrl:
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%2312121a"/><text x="50%" y="40%" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23ffeb3b">DJ Night</text><text x="50%" y="58%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23ff5722">Vibiinz • Sample Photo</text></svg>',
          caption: 'DJ night crowd (sample)',
          club: 'Vibiinz',
          date: '2025-11-18',
          uploadedBy: 'uWall Team',
        },
      ];
      localStorage.setItem('uwall-gallery', JSON.stringify(initialPhotos));
    }

    setPhotos(initialPhotos);

    const params = new URLSearchParams(location.search);
    const clubFromUrl = params.get('club') || '';
    setFilterClub(clubFromUrl);
  }, [location.search]);

  const handleUpload = () => {
    if (!currentUser) {
      setError('You must be logged in to upload photos.');
      return;
    }
    if (!file) {
      setError('Please choose an image to upload.');
      return;
    }
    if (!club) {
      setError('Please select the club/organiser of this event.');
      return;
    }
    if (!date) {
      setError('Please select the event date.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const newPhoto = {
        id: Date.now(),
        dataUrl: e.target.result,
        caption: caption || 'Event moment',
        club,
        date,
        uploadedBy: currentUser.name || currentUser.email,
      };
      const updated = [newPhoto, ...photos];
      setPhotos(updated);
      localStorage.setItem('uwall-gallery', JSON.stringify(updated));
      setFile(null);
      setCaption('');
      setClub('');
      setDate('');
      setError('');
    };
    reader.readAsDataURL(file);
  };

  let visiblePhotos = photos;

  if (filterClub) {
    visiblePhotos = visiblePhotos.filter((photo) => photo.club === filterClub);
  }

  if (onlyMine && currentUser) {
    const uploaderId = currentUser.name || currentUser.email;
    visiblePhotos = visiblePhotos.filter((photo) => photo.uploadedBy === uploaderId);
  }

  visiblePhotos = [...visiblePhotos].sort((a, b) =>
    sortOrder === 'newest' ? b.id - a.id : a.id - b.id,
  );

  const totalPhotos = photos.length;
  const viewCount = visiblePhotos.length;
  const myCount = currentUser
    ? photos.filter((photo) => photo.uploadedBy === (currentUser.name || currentUser.email)).length
    : 0;

  return (
    <section className="uwall-gallery">
      <h2>Photo Gallery</h2>

      <p className="uwall-gallery-info">
        Total photos: <strong>{totalPhotos}</strong>
        {filterClub && (
          <>
            {' '}• This view: <strong>{viewCount}</strong>
          </>
        )}
        {currentUser && (
          <>
            {' '}• Your uploads: <strong>{myCount}</strong>
          </>
        )}
      </p>

      {filterClub && (
        <p className="uwall-gallery-info">
          Showing photos for <strong>{filterClub}</strong>. Use the filters below or open other clubs in the Clubs
          section.
        </p>
      )}

      <div className="uwall-gallery-toolbar">
        <div className="uwall-gallery-club-chips">
          <button
            type="button"
            className={filterClub ? 'uwall-chip' : 'uwall-chip uwall-chip-active'}
            onClick={() => setFilterClub('')}
          >
            All clubs
          </button>
          {clubOptions.map((c) => (
            <button
              key={c}
              type="button"
              className={filterClub === c ? 'uwall-chip uwall-chip-active' : 'uwall-chip'}
              onClick={() => setFilterClub(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="uwall-gallery-toolbar-right">
          {currentUser && (
            <button
              type="button"
              className={onlyMine ? 'uwall-chip uwall-chip-active' : 'uwall-chip'}
              onClick={() => setOnlyMine((prev) => !prev)}
            >
              Only my uploads
            </button>
          )}
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="uwall-gallery-upload">
        <div className="uwall-gallery-upload-fields">
          <label className="uwall-gallery-file-label">
            Select image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0] || null)}
            />
          </label>
          <select
            className="uwall-gallery-select"
            value={club}
            onChange={(e) => setClub(e.target.value)}
          >
            <option value="" disabled>
              Select club / organiser
            </option>
            {clubOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="uwall-gallery-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Event date"
          />
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption (e.g. Hackathon winners at CUIET block)"
          />
          <button type="button" className="uwall-primary-button" onClick={handleUpload}>
            Upload Photo
          </button>
        </div>
        {error && <p className="uwall-gallery-error">{error}</p>}
        {!currentUser && (
          <p className="uwall-gallery-info">Log in to upload, but you can still view shared photos.</p>
        )}
      </div>

      <div className="uwall-gallery-grid">
        {visiblePhotos.length === 0 ? (
          <p className="uwall-gallery-empty">
            {filterClub
              ? `No photos uploaded yet for ${filterClub}.`
              : 'No photos yet. Be the first to share a campus moment!'}
          </p>
        ) : (
          visiblePhotos.map((photo) => (
            <figure key={photo.id} className="uwall-gallery-item">
              <img src={photo.dataUrl} alt={photo.caption} />
              <figcaption>
                <span className="uwall-gallery-caption">{photo.caption}</span>
                <span className="uwall-gallery-meta">
                  {photo.club} • {photo.date}
                </span>
                <span className="uwall-gallery-uploader">by {photo.uploadedBy}</span>
              </figcaption>
            </figure>
          ))
        )}
      </div>
    </section>
  );
}

export default Gallery;
