import React, { useState } from 'react'

const Waves = () => {

  const [amplitude, setAmplitude] = useState(50);
  const [frequency, setFrequency] = useState(1);

  const generateWavePath = () => {
    const width = 500;
    const height = 200;
    const points = [];
    const frequencyFactor = 2 * Math.PI * frequency;

    for (let x = 0; x <= width; x++) {
      const y = Math.sin(frequencyFactor * (x / width)) * amplitude + height / 2;
      points.push(`${x},${y}`);
    }

    return `M0,${height / 2} ${points.join(' ')} L${width},${height / 2} Z`;
  };

  const wavePath = generateWavePath();

  /* test short api */

  return (
    <>
      <h1>Waves
        Waves</h1>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wave Generator</h1>
        <div className="mb-4">
          <label className="block text-lg">Amplitude:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full"
          />
          <p>Amplitude: {amplitude}</p>
        </div>
        <div className="mb-4">
          <label className="block text-lg">Frequency:</label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full"
          />
          <p>Frequency: {frequency}</p>
        </div>
        <svg width="300" height="200" className="border">
          <path
            d={wavePath}
            fill="lightblue"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  )
}

export default Waves
//"M45.7,-44.2C58.5,-30.8,63.4,-10.7,62.2,7.4C61,25.6,53.7,41.7,43.5,52.4C33.3,63.1,19.2,68.4,5.3,68.3C-8.6,68.2,-19.2,62.6,-29.5,54.7C-39.8,46.9,-49.7,35.8,-56.5,23.3C-63.3,10.8,-66.8,-6.4,-64.6,-18.7C-62.4,-31,-54.6,-39.2,-43.7,-51.7C-32.7,-64.3,-18.5,-81.1,-1.8,-81.4C15.6,-81.8,31.1,-65.7,45.7,-44.2Z"