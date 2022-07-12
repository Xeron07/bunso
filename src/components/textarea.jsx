const TextArea = (props) => {
  return (
    <>
      <div
        style={
          props.style
            ? props.style
            : {
                border: "0px",
                borderRadius: "5px",
              }
        }

      >
        <div
            className={"text-editor"}
            contentEditable={"true"}
            suppressContentEditableWarning={true}
            data-text="Enter text here"
          style={{ border: "none", width: "100%",background:"transparent",outline:"0",padding:"10px" }}
          onBlur={(e) => {
              props.handleChange(e.target.innerText);
          }}
        >
            {props.value}
        </div>
      </div>
    </>
  );
};

export default TextArea;
