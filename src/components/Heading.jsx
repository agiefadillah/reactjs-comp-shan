import React from 'react';

function Heading() {
  const waktuSekarang = new Date().getHours();
  let pesan, warna;

  if (waktuSekarang >= 0 && waktuSekarang < 12) {
    pesan = 'Selamat Pagi';
    warna = 'red';
  } else if (waktuSekarang >= 12 && waktuSekarang < 18) {
    pesan = 'Selamat Siang';
    warna = 'green';
  } else {
    pesan = 'Selamat Sore';
    warna = 'blue';
  }

  const styles = {
    heading: {
      color: warna,
    },
  };

  return (
    <div>
      <h1 style={styles.heading}>{pesan}</h1>
    </div>
  );
}

export default Heading;
