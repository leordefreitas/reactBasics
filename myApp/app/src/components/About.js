import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Zumbi (português brasileiro) ou zombie (português europeu) é uma criatura cujo estereótipo se define, nos livros e na cultura popular, como um cadáver reanimado usualmente de hábitos noturnos,[1] que vive a perambular e a agir de forma estranha e instintiva; um morto-vivo;[2] um ser privado de vontade própria,[2] sem personalidade. Histórias de zumbis têm origem no sistema de crenças espirituais e nos rituais do vodu haitiano: segundo crenças populares, o vodu faz com que uma pessoa morta volte à vida à procura de vingança com aquelas pessoas que lhe teriam feito mal. Histórias contam sobre trabalhadores controlados por um poderoso feiticeiro.[3][4]</p>
    </div>
  );
}

export default Rainbow(About);
