import './window-container.css';

function WindowContainer(props) {
  return (
    <div className='window-container'>
      <div className='window-container-nav'>
        <div className='window-container-nav-btn1'></div>
        <div className='window-container-nav-btn2'></div>
        <div className='window-container-nav-btn3'></div>
      </div>
      <div classNme='window-container-content'>
        {props.children}
      </div>
    </div>
  )
}

export default WindowContainer;