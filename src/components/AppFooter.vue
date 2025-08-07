<template>
    <footer id="contacts">
        <div class="footer-container">
            <p>Thanks for stopping by. <br> We’re here to help you shake things up — anytime.</p>
            <div class="media-icons">
                <a href="https://www.amazon.com/stores/Mixoflair/page/18E8BF30-6973-4417-81EA-4E7CB8A2663D?is_byline_deeplink=true&deeplink=18E8BF30-6973-4417-81EA-4E7CB8A2663D&redirect_store_id=18E8BF30-6973-4417-81EA-4E7CB8A2663D&lp_asin=B0F93ZYY6Q&ref_=ast_bln"><img src="/src/assets/images/amazon-icon.png" alt="amazon-icon"></a>
                <a href="https://www.instagram.com/m1xoflair_club/"><img src="/src/assets/images/instagram-icon.png" alt="instagram-icon"></a>
            </div>
        </div>
        <div class="footer-container">
            <p>Contact us</p>
        </div>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background-color: var(--color-dark-blue);
    color: var(--color-white);
    display: flex;
    padding: 100px;
    justify-content: space-between;
    gap: 100px;
    align-self: stretch;
    border-radius: 40px;
    font-family: 'Jano Sans Pro Regular', sans-serif;
  }

  .footer-container {
    width: 50%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .media-icons img {
    width: 50px;
  }
  </style>
  