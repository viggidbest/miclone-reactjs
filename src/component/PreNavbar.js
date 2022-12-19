import React from 'react'
import "../styles/PreNavbar.css"

 const PreNavbar = () => {
  return (
    <div className="preNav">
        <div>
            <a href="https://www.mi.com/in/">MI INDIA</a>
            <a href="https://play.google.com/store/apps/details?id=com.mi.global.shop&hl=en_IN&gl=US&pli=1">Get MI Store App</a>
            <a href="https://www.mi.com/in/support">Help</a>
            <a href="https://www.mi.com/in/store">Retail Store</a>
        </div>
        <div>
            <a href="https://account.xiaomi.com/fe/service/login/phone?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%2525253Futm_source%2525253Dgoogle%252526sign%25253DZjJkODJlN2FkY2QxOTc0ZWY4M2Y4YTIwMzA1MDE1YWIwYTZjOGQwNg%25252C%25252C%2526sid%253Di18n_in_
            pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffol
            lowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%253Futm_source%253Dgoogle%26sign%3DZjJkODJlN2FkY2QxOTc0ZWY4M2Y4YTIwMzA1MD
            E1YWIwYTZjOGQwNg%2C%2C&_sign=7iWIDElgVqRVwawpNrQ3dchZCoM%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress
            %22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a> <span>|</span>
            <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN&source=&region=IN&sid=i18n
            _in_pc_pro&qs=callback%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhtt
            ps%25253A%25252F%25252Fwww.mi.com%25252Fin%2526sign%253DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%252C%252C%2
            6sid%3Di18n_in_pc_pro%26_locale%3Den_IN&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fww
            w.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&_uRegion=IN">SIGN UP</a>  <span>|</span>              
            
            <a href=""><span className="material-symbols-outlined">shopping_cart</span>Cart(0)</a>
        </div>
    </div>
  )
}

export default PreNavbar