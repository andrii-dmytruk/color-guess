/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useState,
} from 'react';
import './App.scss';

function getRandomInt(minn: number, maxx: number) {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);

  return Math.floor(Math.random() * (max - min) + min);
}

function generateColor() {
  let res = '#';

  for (let i = 0; i < 3; i += 1) {
    res += getRandomInt(0, 255).toString(16);
  }

  return res.toUpperCase();
}

function generateVariations() {
  const arr = Array.from({ length: 3 }, () => generateColor());

  return arr;
}

export const App = () => {
  const [colorVariations, setColorVariations] = useState(generateVariations());
  const [result, setResult] = useState<boolean | null>(null);

  const trueColor = colorVariations[getRandomInt(0, 2)];

  const handleButtonClick = (color: string) => {
    setResult(color === trueColor);
    setColorVariations(generateVariations());
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Color Guess</h1>

        <div
          className="color-container"
          style={{ backgroundColor: trueColor }}
        >
          What color is it?
        </div>

        <div className="buttons-container">
          {colorVariations.map(color => (
            <button
              type="button"
              className="color-button"
              key={color}
              onClick={() => handleButtonClick(color)}
            >
              {color}
            </button>
          ))}
        </div>

        {result !== null && (
          <div className="info">
            {result
              ? <span className="right-answer">You`re right!</span>
              : <span className="wrong-answer">Wrong answer!</span>}
          </div>
        )}
      </div>
    </div>
  );
};
