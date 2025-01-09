import React from 'react';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative pl-8 pb-12">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#FF4500] to-[#FFD700]" />
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-[#FF4500] glow-orange" />
      <div className="space-y-3">
        <span className="text-[#FFD700] font-medium">{date}</span>
        <h3 className="text-xl font-bold text-[#E0E0E0]">{title}</h3>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full max-w-md object-cover"
          />
        )}
        <p className="text-[#E0E0E0]">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;