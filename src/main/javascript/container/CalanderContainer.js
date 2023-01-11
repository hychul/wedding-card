function CalanderContainer() {
  const weekRowStyle = {
    height: "2rem",
  };
  const sunDayStyle = {
    textAlign: "center",
    verticalAlign: "middle",
    color: "red",
  };
  const dateStyle = {
    textAlign: "center",
    verticalAlign: "middle",
  };
  const dDayStyle = {
    backgroundColor: "pink",
    borderRadius: "0.5rem",
    textAlign: "center",
    verticalAlign: "middle",
    color: "white",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        padding: "50px 0px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "1.1rem",
        }}
      >
        3월
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        <table
          style={{
            width: "50vh",
            height: "calc(50vh / 7 * 5)",
          }}
        >
          <tbody>
            <tr style={weekRowStyle}>
              <td style={dateStyle}></td>
              <td style={dateStyle}></td>
              <td style={dateStyle}></td>
              <td style={dateStyle}>1</td>
              <td style={dateStyle}>2</td>
              <td style={dateStyle}>3</td>
              <td style={dateStyle}>4</td>
            </tr>
            <tr style={weekRowStyle}>
              <td style={sunDayStyle}>5</td>
              <td style={dateStyle}>6</td>
              <td style={dateStyle}>7</td>
              <td style={dateStyle}>8</td>
              <td style={dateStyle}>9</td>
              <td style={dateStyle}>10</td>
              <td style={dateStyle}>11</td>
            </tr>
            <tr style={weekRowStyle}>
              <td style={sunDayStyle}>12</td>
              <td style={dateStyle}>13</td>
              <td style={dateStyle}>14</td>
              <td style={dateStyle}>15</td>
              <td style={dateStyle}>16</td>
              <td style={dateStyle}>17</td>
              <td style={dDayStyle}>18</td>
            </tr>
            <tr style={weekRowStyle}>
              <td style={sunDayStyle}>19</td>
              <td style={dateStyle}>20</td>
              <td style={dateStyle}>21</td>
              <td style={dateStyle}>22</td>
              <td style={dateStyle}>23</td>
              <td style={dateStyle}>24</td>
              <td style={dateStyle}>25</td>
            </tr>
            <tr style={weekRowStyle}>
              <td style={sunDayStyle}>26</td>
              <td style={dateStyle}>27</td>
              <td style={dateStyle}>28</td>
              <td style={dateStyle}>29</td>
              <td style={dateStyle}>30</td>
              <td style={dateStyle}>31</td>
              <td style={dateStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalanderContainer;
