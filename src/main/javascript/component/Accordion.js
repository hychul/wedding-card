import { useEffect, useRef, useState } from "react";

function Accordion({ summary, children }) {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(contentRef?.current?.clientHeight ?? 0);
  }, []);

  return (
    <>
      <div className={"accordion"}>
        <details>
          <summary
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "0px 25px",
              width: "calc(100% - 50px)",
              height: "50px",
              borderRadius: "25px",
              border: "0px",
              backgroundColor: "#fff2f4",
            }}
          >
            <div>{summary}</div>
            <div className={"arrow"}></div>
          </summary>
        </details>
        <div className={"content-wrapper"}>
          <div className={"content"} ref={contentRef}>
            {children}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .accordion {
          width: 100%;
        }

        details {
          cursor: pointer;
        }

        summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .content-wrapper {
          overflow: hidden;
        }

        .content {
          transition: 0.3s ease;
          margin-top: -${contentHeight}px;
          opacity: 0;
        }

        details[open] + .content-wrapper > .content {
          margin-top: 10px;
          opacity: 1;
        }

        .arrow {
          transition: transform 0.3s;
          width: 7px;
          height: 7px;
          border-top: 2px solid grey;
          border-right: 2px solid grey;
          transform: rotate(135deg);
        }

        details[open] .arrow {
          transform: rotate(315deg);
        }
      `}</style>
    </>
  );
}

export default Accordion;
