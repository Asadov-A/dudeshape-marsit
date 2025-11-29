import React from 'react'
import { useState, useEffect } from 'react'
import img1 from "../../assets/backgrounds/img1.jpg"
import img2 from "../../assets/backgrounds/img2.jpg"
import './Abdulloh.css'
function Abdulloh() {
  return (
    <>
      <div className="ota">
        <div className="chap">
          <h1>The Perfect Beauty Of You</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h3>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </h3>
          <button><a target="blank" href="https://www.amazon.com/s?k=beauty+cosmetics+products&adgrpid=1335909152300165&hvadid=83494599314581&hvbmt=be&hvdev=c&hvlocphy=193&hvnetw=o&hvqmt=e&hvtargid=kwd-83495493272087%3Aloc-193&hydadcr=29165_14570280&mcid=2f848d84d1f936b39e6929735ca10b29&msclkid=115fadc3106210a7a7f0c4e2882226a1&tag=mh0b-20&ref=pd_sl_5x4lvrl7yz_e">Shop now</a></button>
        </div>
        <div className="ong">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="pasota">
        <div className="paschab">
          <img src={img2} alt="" />
        </div>
        <div className="pasong">
          <h1>Amazing Cosmetic ⭐️⭐️⭐️⭐️⭐️</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p className="ism">Rusmin Islam Designer</p>
        </div>
      </div>

      <div className="footerpas">
        <h1>Subscribe to Get Our Letest News</h1>

        <div className="ongb">
          <input placeholder="Enter email" type="mail" />
          <button>
            <a
              target="blank"
              href="https://www.amazon.com/s?k=beauty+cosmetics+products&adgrpid=1335909152300165&hvadid=83494599314581&hvbmt=be&hvdev=c&hvlocphy=193&hvnetw=o&hvqmt=e&hvtargid=kwd-83495493272087%3Aloc-193&hydadcr=29165_14570280&mcid=2f848d84d1f936b39e6929735ca10b29&msclkid=115fadc3106210a7a7f0c4e2882226a1&tag=mh0b-20&ref=pd_sl_5x4lvrl7yz_e"
            >
              Subscribe
            </a>
          </button>
        </div>
      </div>
      <hr />

      <div className="footer">
        <div className="chapf">
          <h1>Dudeshape</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div className="ortaf">
          <h2>Quick Link</h2>
        <a href="">home</a>
          <a target="blank" href="https://www.amazon.com/s?k=beauty+cosmetics+products&adgrpid=1335909152300165&hvadid=83494599314581&hvbmt=be&hvdev=c&hvlocphy=193&hvnetw=o&hvqmt=e&hvtargid=kwd-83495493272087%3Aloc-193&hydadcr=29165_14570280&mcid=2f848d84d1f936b39e6929735ca10b29&msclkid=115fadc3106210a7a7f0c4e2882226a1&tag=mh0b-20&ref=pd_sl_5x4lvrl7yz_e">Products</a>
          <a target="blank" href="https://toupsandco.com/collections/makeup?tw_source=bing&tw_adid=&tw_campaign=486729016&tw_kwdid=dat-2329040506580593:loc-193&msclkid=bf6764b37ccc1e591d770d92e75229f1&utm_source=bing&utm_medium=cpc&utm_campaign=Dynamic%20Campaign&utm_term=https%3A%2F%2Ftoupsandco.com%2Fcollections%2Fmakeup&utm_content=Make%20Up">About us</a>
        </div>
        <div className="ongf">
          <h3>Contact Us</h3>
          <p>oyasimnaeem@email.com</p>
          <b>+123456789</b>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default Abdulloh
