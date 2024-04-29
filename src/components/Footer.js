import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div>

      <div className='footer-div pt-5 mt-5'>
        <div>
          <p className='heading'>MY RECIPES</p>
          <p className='p'>About</p>
          <p className='p'>Contact</p>
          <p className='p'>Office</p>
          <p className='p'>Media Mentions</p>
          <p className='p'>Sponsered Content</p>
        </div>

        <div>
          <p className='heading'>FOOD&RECIPES</p>
          <p className='p'>Sugar Free January</p>
          <p className='p'>Freezer Meals 101</p>
          <p className='p'>Quick and Easy Recipes</p>
          <p className='p'>Instant pot Recipes</p>
          <p className='p'>Pasta Recipes</p>
        </div>

        <div>

          <div>
            <p className='heading'>Get in Touch</p>
            <div className='foot-logos'>
                <i class="fa-brands fa-facebook fAw"></i>
                <i class="fa-brands fa-whatsapp fAw"></i>
                <i class="fa-brands fa-twitter fAw"></i>
                <i class="fa-solid fa-globe fAw"></i>
            </div>
          </div>

          <div className='mt-5'>
            <p className='p'>What is your opinion of this page</p>
            
              <img className='em' src="https://i.postimg.cc/sXmRDjt4/1-16851-transparent-emotes-hug-hugging-face-emoji-png-removebg-preview.png" alt="" />
              <img className='emoji' src="https://i.postimg.cc/7L72Rcpk/download-removebg-preview.png" alt="" />
              <img className='emo' src="https://i.postimg.cc/W46M3CS7/images-2-removebg-preview.png" alt="" />
              <img className='e' src="https://i.postimg.cc/MpGkdJfn/images-removebg-preview.png" alt="" />
          </div>

        </div>
      </div>

      <div className='text-center py-3 mfooter'>
        <p className='m-0'>© 2024 My Recipe / All Rights Reserved / Privacy</p>
      </div>

    </div>
  )
}

export default Footer
