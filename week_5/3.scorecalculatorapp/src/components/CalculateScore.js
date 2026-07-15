import '../StyleSheets/mystyle.css'

const percentToDecimal = (decimal) => {
    return (decimal.toFixed(2) + '%')
}

const calcScore = (total,goal) => {
    return percentToDecimal(total/goal)
}

export const CalculateScore = ({ Name, College, total, goal }) => (
  <div className="formatstyle">
    <h1>
      <font color="Brown">Student Details:</font>
    </h1>

    <div className="Name">
      <b>
        <span>Name: </span>
      </b>
      <span>{Name}</span>
    </div>

    <div className="College">
      <b>
        <span>College: </span>
      </b>
      <span>{College}</span>
    </div>

    <div className="Total">
      <b>
        <span>Total: </span>
      </b>
      <span>{total}</span>
      <span> Marks</span>
    </div>

    <div className="Score">
      <b>Score:</b>
      <span>
        {calcScore(
          total,
          goal
        )}
      </span>
    </div>
  </div>
);