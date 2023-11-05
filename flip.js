
    function onCoupon(){
        document.getElementById('coupon').style.visibility='visible';
        document.body.style.opacity='0.6';
            
        }
        function closeCoupon(){
            document.getElementById('coupon').style.visibility='hidden';
            document.body.style.opacity='1';
            
        }
        function change_mode(){
            let mybody = document.body
            mybody.classList.toggle('dark_mode')
        }



        