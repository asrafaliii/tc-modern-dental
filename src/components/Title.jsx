// Title.jsx
import React from 'react';
import PropTypes from 'prop-types';

const alignmentMap = {
  start: 'text-left items-start',
  center: 'text-center items-center',
  end: 'text-right items-end',
};

const Title = ({ subtitle, title, align = 'center' }) => {
  const alignmentClasses = alignmentMap[align] || alignmentMap.center;

  return (
    <div className={`w-full flex flex-col ${alignmentClasses}`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2.5 mb-2 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 pr-4 py-1 text-sm text-primary">
          <p>{subtitle}</p>
        </div>
      )}
      {title && (
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>
      )}
    </div>
  );
};

Title.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['start', 'center', 'end']),
};

export default Title;
