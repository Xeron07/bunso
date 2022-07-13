

const ContentView=(props)=>{
  const itemListView=(list)=>{
      return list.map((obj,inx)=> <span key={{inx}}>{obj.content}</span>);
  }
    return (<>
        <div style={{padding:"10px"}}>
            {props.items? itemListView(props.items):""}
        </div>
    </>);
}

export default ContentView;