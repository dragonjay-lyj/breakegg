import React, { useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Button } from '@nextui-org/react';


interface RoleAudio {
  name: string;
  audioSrc: string;
}

interface AudioPlayerWithWaveformProps {
  roles: RoleAudio[];
  waveformColor?: string;
}

const AudioPlayerWithWaveform: React.FC<AudioPlayerWithWaveformProps> = ({ roles, waveformColor = '#ff5500' }) => {
  const [currentRole, setCurrentRole] = useState<RoleAudio>(roles[0]);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer>();

  React.useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: waveformColor,
        progressColor: 'purple',
        barWidth: 3,
        barHeight: 1,
        responsive: true,
        cursorWidth: 1,
        hideScrollbar: true,
        audioRate: 1,
        backend: 'MediaElement',
        mediaControls: true,
        partialRender: true,
      });

      wavesurfer.current.load(currentRole.audioSrc);
    }

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [currentRole, waveformColor]);

  const handleRoleChange = (role: RoleAudio) => {
    setCurrentRole(role);
    wavesurfer.current?.load(role.audioSrc);
  };

  return (
    <div className="flex flex-col items-center">
      <div ref={waveformRef} className="mb-4 w-full" style={{ minHeight: '100px' }}></div>
      <div className="flex flex-wrap justify-center mb-2">
        {roles.map((role, index) => (
          <Button
            key={index}
            onClick={() => handleRoleChange(role)}
            className={` text-white font-bold py-2 px-4 m-1 rounded ${currentRole === role ? '' : ''}`}
          >
            {role.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayerWithWaveform;
