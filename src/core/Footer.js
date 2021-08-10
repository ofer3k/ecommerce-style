import React from 'react'
import './../styles/footer.css'
import visa from './../assets/group-9.png'
export default function Footer() {
    return (
        <div className={'footer'}>
            <span style={{color:'white'}} >
                <img className={'visa'} src={visa} />
            </span>
            <span className={'newzelter'} style={{color:'white'}}>
                <span>הצטרף לניוזלטר שלנו וקבל הנחה של 20 &#8362; בהזמנה הראשונה שלך</span>
                <br/>
                <span className={'email_input'}>
    <label className={'email_label'}>הירשם כמנוי</label>
    <input className={'email_input__text'} style={{width:'300px'}} type="text" />
    </span>

            </span>
        </div>
    )
}
