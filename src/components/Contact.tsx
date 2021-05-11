import { useEffect, useState } from 'react';
import styles from '../styles/components/Contact.module.css';


export function Contact(){
    

    /*useEffect(()=>{
        const contactBox = document.getElementById("contact")
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        window.addEventListener('scroll', ()=>{
            if ((windowTop) > window.innerHeight+(window.innerHeight/4)){
                contactBox.style.opacity = '1'
            }else{
                contactBox.style.opacity = '0'
            }
        })
    })*/


    return(
        <div className={styles.contactContainer} id="contact">
             <p>Entre em contato</p>

             <div className={styles.icons}>
                <a href="mailto:jeffersonts00@gmail.com.br"  target="_blank" rel="noopener noreferrer">
                        <span className={styles.iconGmail}></span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5561982242660"  target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconWhatsapp}></span>
                </a>
             </div>
        </div>
    )
}