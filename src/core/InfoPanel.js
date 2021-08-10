import React from 'react'
import './../styles/info_panel.css'
import svg1 from './../assets/iconfinder-731069-safe-sheald-trust-verification-icon.svg'
import svg2 from './../assets/iconfinder-3552239-chat-conversation-formal-male-man-icon.svg'
import svg3 from './../assets/iconfinder-5253078-box-delivery-product-icon.svg'
export default function InfoPanel() {
    return (
        <div className={'info_panel_container'}>
          <div class="parent_panel_container">
            <div class="div1_panel_container">
                <span className={'first_square'}>
<span className={'first_square__title'}>?למה כמיפל</span>
<br/>
<span className={'hr_bottom'}></span>
<br/>
<span className={'first_square__text'}>נולום ארווס סאפיאן - פוסילוס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק וענוף לפרומי בלוף קינץ תתיח לרעח</span>
                </span>
            </div>
            <div class="div2_panel_container">
             <span className={'seconde_square'}>
                 <img style={{marginTop:'30px'}} className={'svg_icon'} src={svg3}></img>
                 <p className={'svg_icon__text'}>משלוח מהיר</p>
                </span>                   
            </div>

            <div class="div3_panel_container">
            <span className={'first_square'}>
            <img style={{margin:'24px 0 0 30px'}} className={'svg_icon'} src={svg2}></img>

<br/>
<br/>
<span className={'first_square__text'} style={{fontSize:'10px'}} >נולום ארווס סאפיאן - פוסילוס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק וענוף לפרומי בלוף קינץ תתיח לרעח</span>
                </span>
            </div>

            <div class="div4_panel_container">
            <span  className={'seconde_square'}>
                 <img style={{marginTop:'30px'}} className={'svg_icon'} src={svg1}></img>
                 <p className={'svg_icon__text'}>מהימן</p>
                </span>
            </div>
            </div>
        </div>
    )
}
