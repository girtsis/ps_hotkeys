import Layout from '../components/Layout'
import { useState, useEffect } from 'react';

export default function Home() {
    const [favoritesSelected, selectFavorites] = useState(false);

    let favorites;

    if (favoritesSelected) {
        favorites = <button onClick={() => selectFavorites(false)} style = {{border: "none"}}>
        <img src="favorite_active.png" width="30"
height="30"></img></button>
    }
    else {
        favorites = <button onClick={() => selectFavorites(true)} style = {{border: "none"}}>
        <img src="favorite_notActive.png" width="30"
height="30"></img></button>
    }

  return (
    <Layout>

    
    
    <div id="body" className="container-fluid">
      <div className="container fluid align-content-center align-items-center" id="page">





      <div className="container-fluid pb-4 align-content-center align-items-center">
      <p style={{fontSize: 28, fontWeight: 400, fontFamily: "Inter", color: "#252DFB"}}>Type hotkey name or description to search for it. You can also press a button combination and see all hotkeys binded to this combination. To add a hotkey to favorites, press on the “heart” button. Press on the “heart” button near “search” to show only favorites. Double-press on a hotkey to open details view.</p>
      </div>

   


      <div className="container-fluid pb-4 align-content-center align-items-center align-self-center">
      <div className="container ml-4 mr-4 pl-4 pr-4">
      
      <div className="input-group">
      <div style={{paddingRight:10}} className="nav-link active pt-1">
                    {favorites}
                </div>
  <input type="text" className="form-control" id="tableSearch" placeholder="Search"></input>
  <div className="input-group-append">
  <div style={{paddingRight:10}} className="dropdown">
  <button style={{boxShadow: "none", WebkitAppearance: "none", appearance: "none"}} className="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src="filter.png" width="45"
     height="30"></img>
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
  </div>
</div>


</div>
</div>




      



      <div className="container-fluid mx-5">

      <div className="row mt-3 g-4">

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Change Image Size</h4>

                  <p className="hkDescription">Control + Alt + i (Command + Option + i )</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Change canvas Size</h4>

                  <p className="hkDescription">Control + Alt + c (Command + Option + c )</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Zoom in</h4>

                  <p className="hkDescription">Control + + (Command + +)</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Zoom Out</h4>

                  <p className="hkDescription">Control + - (Command + - )</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Scale Proportionately</h4>

                  <p className="hkDescription">Hold the shift key while selecting the object</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Scale in place (from center of the object)</h4>

                  <p className="hkDescription">Hold shift + option while selecting the object</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Pointer, a.k.a. Move Tool</h4>

                  <p className="hkDescription">v</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Select Tool</h4>

                  <p className="hkDescription">m</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Eyedropper</h4>

                  <p className="hkDescription">i</p>

              </div>

          </div>

          <div className="col-md-4">

              <div>

                  <h4 className="hkTitle">Magic Wand</h4>

                  <p className="hkDescription">w</p>

              </div>

          </div>


        </div>

      </div>





      <div style={{justifySelf: "center", justifyContent: "center", justifySelf: "center", paddingTop: 64}} className="container">
  <footer className="ftr">
    <ul className="nav justify-content-center border-bottom border-primary pb-1 mb-1">
      <li className="nav-item"><a className="nav-link active" href="#"><img src="twitter.png" width="25"
     height="25"></img></a></li>
      <li className="nav-item"><a className="nav-link active" href="#"><img src="facebook.png" width="25"
     height="25"></img></a></li>
      <li className="nav-item"><a className="nav-link active" href="#"><img src="instagram.png" width="25"
     height="25"></img></a></li>
    </ul>
    <p className="text-center text-muted">Copyright &copy; 2022 Photoshophk.com</p>
  </footer>
</div>





</div>
</div>
    </Layout>
  )
}
