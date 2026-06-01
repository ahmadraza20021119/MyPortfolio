import React, { useState, useEffect } from 'react';
import { PDF_PATHS, certificates as certsData } from '../data/portfolioData';

const Certificates = () => {
  const [modalData, setModalData] = useState({ isOpen: false, key: '', title: '' });
  const [isMobile, setIsMobile] = useState(false);

  const openPDF = (key, title) => {
    setModalData({ isOpen: true, key, title });
    document.body.style.overflow = 'hidden';
  };

  const closePDF = () => {
    setModalData({ isOpen: false, key: '', title: '' });
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePDF();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <section id="certificates">
        <div className="section-inner">
          <div className="section-label">// 05. certificates</div>
          <h2 className="section-title">My <span>Credentials</span></h2>
          <div className="certs-grid">
            {certsData.map((c) => (
              <div className="cert-card" key={c.key}>
                <div className="cert-top">
                  <div className={`cert-bg ${c.colorClass}`}></div>
                  <div className="cert-logo">{c.logo}</div>
                </div>
                <div className="cert-body">
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-date">{c.date}</div>
                  <div className="cert-actions">
                    <button 
                      className="cert-btn cert-btn-primary" 
                      onClick={() => openPDF(c.key, c.modalTitle)}
                    >
                      📂 View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <div 
        id="pdf-modal" 
        className={modalData.isOpen ? 'open' : ''} 
        onClick={(e) => {
          if (e.target.id === 'pdf-modal') closePDF();
        }}
        style={{ display: modalData.isOpen ? 'flex' : 'none' }}
      >
        <div className="pdf-modal-inner">
          <div className="pdf-modal-bar">
            <span className="pdf-modal-title">{modalData.title}</span>
            <button className="pdf-modal-close" onClick={closePDF}>✕ Close</button>
          </div>
          {modalData.isOpen && (
            isMobile ? (
              <div className="pdf-mobile-fallback">
                <span className="pdf-icon">📄</span>
                <h3>View Credential</h3>
                <p>Mobile browsers require opening PDF documents in a new tab.</p>
                <a 
                  href={PDF_PATHS[modalData.key]} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary"
                  onClick={closePDF}
                >
                  Open Certificate ↗
                </a>
              </div>
            ) : (
              <iframe 
                id="pdf-frame" 
                src={PDF_PATHS[modalData.key]} 
                title={modalData.title}
              ></iframe>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Certificates;
