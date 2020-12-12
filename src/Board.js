import Col from './Col';
import Wall from './Wall';

const renderCol = (i, j) => {
  console.log(i, j, i + j);
  const isHorizontalWall = i % 2===0;
  const isVericalWall = j % 2===0;
  const isWall = isHorizontalWall || isVericalWall;
  const isKnob = isHorizontalWall && isVericalWall;

  if (i===0 || j===0) return null;

  if (isKnob)
    return (
      <div
        className="Knob"
        data-i={i}
        data-j={j}
      ></div>
    );

  if (isWall)
    return <Wall i={i} j={j} />;

  return <Col i={i} j={j} />;
};

const renderRow = (i, matrixRow) => {
  return <div className="Row">{matrixRow.map((_, j) => renderCol(i, j))}</div>;
};

function Board({ size }) {
  const matrixRow = new Array(size * 2).fill(0);
  return (
    <div className="Board">
      {matrixRow.map((_, i) => renderRow(i, matrixRow))}
    </div>
  );
}

export default Board;
