import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageHeader = ({ title }) => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <div
      className="relative flex items-center justify-center h-100 text-black text-center px-4"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.7)), url('https://res.cloudinary.com/dro6y5qla/image/upload/v1755374378/hero_blxf54.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="z-10 py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">{title}</h1>

        {/* Breadcrumb */}
        <nav className="text-sm text-black/80">
          <Link to="/" className="hover:underline">Home</Link>
          {paths.map((path, index) => {
            const url = '/' + paths.slice(0, index + 1).join('/');
            return (
              <span key={index}>
                {' / '}
                <Link to={url} className="capitalize hover:underline">
                  {decodeURIComponent(path)}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
