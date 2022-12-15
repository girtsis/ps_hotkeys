import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container">

      <p style={{fontSize: 36, fontWeight: 400, fontFamily: "Inter", color: "#252DFB"}}>Aliquip irure elit officia aliqua magna occaecat sint minim cillum ea officia ex laborum eu. Cillum in proident esse quis aliqua irure commodo duis non enim. Officia consectetur aliqua veniam duis esse tempor magna sunt et cillum quis eiusmod laboris. Tempor velit aliquip ut sint cillum elit amet tempor et esse duis.</p>

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
    </Layout>
  )
}
