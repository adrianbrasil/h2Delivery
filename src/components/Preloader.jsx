import loadingGif from "../assets/images/loading.gif";

import '../styles/preload.scss';

export function Preloader(props) {
  return (
      props.visibility ?
        <div id="preloader">
          <div className="container">
            <img src={loadingGif} alt="Gif preload" />
          </div>
        </div>
      : <div></div>
  )
}
