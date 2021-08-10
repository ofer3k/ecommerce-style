import React,{useState} from 'react'
import './../../styles/main_field.css'
import './../../styles/card.css'

import Heart from "react-heart"
import { BsHeart } from 'react-icons/bs';
import { AiFillStar,AiOutlineShoppingCart } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './../../styles/heart.css'
// import {func} from './extra'
export default function Card(props) {
    console.log(props.heart)
    const [active, setActive] = useState(false)
    const heartClick=()=>{
        document.getElementById(props.heart).style.background='red'
        }

        



    return (
        <div className={'card_container'}>
            
        <span className={'backImg'} style={{backgroundImage: `url(${props.pic})`}} >
       
        <span className={'card_header'}>
        <div className={'card_header__heart'} style={{ width: "1rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
            <span className={'card_header__sale'}>מבצע!</span>
        </span>
        <span className={'card_footer'}>
        <div class="parent_footer">
<div class="div1_footer">
<span className={'div1_footer__review'}>
    (5 ביקורות)
</span>

    <span className={'stars'}>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    </span>

</div>
<div class="div2_footer">
    <span className={'div1_footer__description'}>משאבת חלב אוונט נטורל</span>
         </div>
<div class="div3_footer">
<span  className={'price_crossed'}>650 	&#8362;</span>
<span className={'price'}>525 	&#8362;</span>
{/* <span className={''}>משאבת חלב אוונט נטורל</span> */}
</div>
<div class="div4_footer">
    <span className={'cart'}>
        <span className={'cart_icon'}>
    <FontAwesomeIcon icon={faShoppingCart} inverse  flip="horizontal"  />
    <br/>
    <span className={'cart_icon__text'}>להוסיף לעגלה</span>
    </span>
    </span>
</div>
</div>
        </span>
        </span>
        
        </div>
    )
}
