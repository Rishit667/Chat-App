import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
  
  return (
    <div className="detail">
      <div className="user2">
        <img src="./avatar.png"/>
        <h3>Jane Doe</h3>
        <p>Lorem ipsum dolor sit  </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/62/41/3b/f5/46/v1_E10/E105KWDY.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=e11c3dbe7f8b7a976de3ef0566e100f92c352e2593dbc570a2a63fba4d87a933"/>
              <span>photo_2025.png</span>
              </div>
            <img src="download.png"  className="downloadpng"/>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/62/41/3b/f5/46/v1_E10/E105KWDY.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=e11c3dbe7f8b7a976de3ef0566e100f92c352e2593dbc570a2a63fba4d87a933"/>
              <span>photo_2025.png</span>
              </div>
            <img src="download.png" className="downloadpng"/>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/62/41/3b/f5/46/v1_E10/E105KWDY.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=e11c3dbe7f8b7a976de3ef0566e100f92c352e2593dbc570a2a63fba4d87a933"/>
              <span>photo_2025.png</span>
              </div>
            <img src="download.png" className="downloadpng"/>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/62/41/3b/f5/46/v1_E10/E105KWDY.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=e11c3dbe7f8b7a976de3ef0566e100f92c352e2593dbc570a2a63fba4d87a933"/>
              <span>photo_2025.png</span>
              </div>
            <img src="download.png" className="downloadpng"/>
            </div>


          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>Log Out</button>
      </div>
    </div>
  )
}

export default Detail