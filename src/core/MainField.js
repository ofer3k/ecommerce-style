import React from 'react'
import Card from './components/Card'
import './../styles/main_field.css'
import brush from './../assets/brush.png'
// 
import razer from './../assets/3.jpg'
import milkPump from './../assets/2.jpg'
import philips from './../assets/4.jpg'
import section from './../assets/5.jpg'
import milPumpOriginal from './../assets/6.jpg'
import gun from './../assets/7.jpg'

export default function MainField() {
    return (
        <div>
            <div class="parent_main_field">
<div class="div1_main_field">
    <img heart={'_7'} className={'img'} src={brush}/>
</div>
<div class="div2_main_field">
    <Card heart={'_6'} pic={razer} />
</div>
<div class="div3_main_field"><Card heart={'_1'} pic={gun} /> </div>
<div class="div4_main_field"><Card heart={'_2'} pic={milkPump} /> </div>
<div class="div5_main_field"><Card heart={'_3'} pic={milPumpOriginal} /> </div>
<div class="div6_main_field"><Card heart={'_4'} pic={philips} /> </div>
<div class="div7_main_field"><Card heart={'_5'} pic={section} /> </div>
</div>
        </div>
    )
}
