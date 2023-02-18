import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import '../bitcoin-logo/bitcoin-logo.styles.scss';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function BitLogo() {

  const options = {
    scale: 1,
    speed: 1000,
/*     perspective: 1, */
/*     max: 15, */
    transition: true,
    "full-page-listening": true,
  };

  return (
    <>
      <Tilt className="box" options={options} />
    </>
  );
}

export default BitLogo;