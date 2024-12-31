import React from 'react';

const Expertise = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Expertise Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: 'bold' }}>Expertise</h2>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img src="./images/ex-logo.png" alt="Expertise 1" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
          <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Expertise 1</p>
        </div>
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img src="/images/g-logo.png" alt="Expertise 2" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
          <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Expertise 2</p>
        </div>
      </div>

      {/* Logos Section */}
      <div style={{ marginTop: '40px' }}>
      <h2 style={{ fontSize: '2.5em', textAlign: 'center', fontWeight: 'bold' }}>Demo Section</h2>
      <h2 style={{ fontSize: '2.5em', textAlign: 'center', fontWeight: 'bold' }}>_________________________________</h2>
        <h2 style={{ fontSize: '2.5em', textAlign: 'center', fontWeight: 'bold' }}>Logos</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="./images/logo1.png" alt="Logo 1" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Logo 1</p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="./images/logo2.png" alt="Logo 2" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Logo 2</p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="./images/logo3.png" alt="Logo 3" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Logo 3</p>
          </div>
        </div>
      </div>

      {/* Advertisement Videos Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2.5em', textAlign: 'center', fontWeight: 'bold' }}>Advertisement Videos</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <video controls style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
              <source src="./images/ad1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Ad 1</p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <video controls style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
              <source src="./images/ad2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Ad 2</p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <video controls style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
              <source src="./images/ad3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Ad 3</p>
          </div>
        </div>
      </div>


      {/* Posters Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2.5em', textAlign: 'center', fontWeight: 'bold' }}>Posters</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="./images/poster1.png" alt="Poster 1" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Poster 1</p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="./images/poster2.png" alt="Poster 2" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Poster 2</p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="./images/poster3.png" alt="Poster 3" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>Poster 3</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2.5em', textAlign: 'center', fontWeight: 'bold' }}>Skills</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center', fontSize: '1.5em' }}>
          <li>Video Editing</li>
          <li>Graphic Design</li>
          <li>Logo Design</li>
          <li>product animation</li>
        </ul>
      </div>
    </div>
  );
};

export default Expertise;
