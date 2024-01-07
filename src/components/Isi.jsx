import React from 'react';

function Isi() {
  const namaSaya = 'Shan';
  const tahunSekarang = new Date().getFullYear();
  const fotoBebas = 'https://picsum.photos/200';

  return (
    <div>
      <img src={fotoBebas + '?grayscale'} alt="Grayscale" />
      <img src={fotoBebas} alt="Original" />

      <p>Created by {namaSaya}</p>
      <p>Copyright {tahunSekarang}</p>
    </div>
  );
}

export default Isi;
