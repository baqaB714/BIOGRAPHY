document.addEventListener('DOMContentLoaded' , function(){

    



    let loopAllClass = function(myclass , myfun){

        const myarry = document.getElementsByClassName(myclass);

        for (const item of myarry) {
            myfun(item);
        }

    }







    loopAllClass('tab_menu_item' , function(item){
        item.addEventListener('click' , function(){

            let this_selector = this;

            if(document.querySelector('.checkBtn').value == 'on'){
                document.querySelector('.checkBtn').click(); 
            }
    
    
            if(this_selector.className.split(" ").indexOf("active_tab")>-1){
                document.querySelector('.body_tabs').classList.remove('active_body_tabs');
                this_selector.classList.remove('active_tab');
            }else{
                document.querySelector('.body_tabs').classList.remove('active_body_tabs');



                loopAllClass('tab_menu_item' , function(item){
                    item.classList.remove('active_tab');
                })
                


                this_selector.classList.add('active_tab');
    
                setTimeout(function(){
                    document.querySelector('.body_tabs').classList.add('active_body_tabs');
                } ,400)
    
            }

            console.log(this_selector.className.split(" ").indexOf("active_tab"));

        })

    })
        






    loopAllClass('close_window' , function(item){
        item.addEventListener('click' , function(){
            console.log(item.parentElement.parentElement);
            item.parentElement.parentElement.classList.remove('active_body_tabs');

            loopAllClass('tab_menu_item' , function(x){
               x.classList.remove('active_tab');
            })

            item.parentElement.parentElement.className == 'abought_main' ?
            item.parentElement.parentElement.classList.add('zero_scale') : null;

            loopAllClass('skill_number' , function(y){
                let skillNumber =  y.innerHTML;
                y.parentElement.parentElement.children[1].children[0].style.width=0;
                })


            
    
        })

    })




    document.querySelector('#aboght_btn').addEventListener('click' , function(event){
        event.stopPropagation();

        var element = document.getElementById("abought_main");
        element.classList.toggle("zero_scale");

    })


    document.querySelector('body').addEventListener('click' , function(){
        document.querySelector('#abought_main').classList.add('zero_scale');
    })

    document.querySelector('#abought_main').addEventListener('click' , function(event){
        event.stopPropagation();
    })




    loopAllClass('tab_menu_item' , function(item){
        
        item.addEventListener('click' , function(){

                setTimeout(function(){

                var contentid = item.getAttribute('data-idname');
    
                loopAllClass('part_body' , function(x){
                    x.classList.add('d-none')
                })
                document.querySelector(`#${contentid}`).classList.remove('d-none');
    
                if(contentid=='content2'){
    
                    setTimeout(function(){
                        loopAllClass('skill_number' , function(y){
                            let skillNumber =  y.innerHTML;
                            y.parentElement.parentElement.children[1].children[0].style.width=skillNumber;
                            })
        
                    } , 500)
                
                }
            } , 400)

            })
    
    
    })


    document.querySelector('#logIn').addEventListener('click' , function(){
        document.querySelector('#body_modal').classList.toggle('zero_scale');
        let this_selector = this;
        this_selector.classList.toggle('close_login');
        setTimeout(function(){
            this_selector.classList.toggle('fa-user-alt');
            this_selector.classList.toggle('fa-times');
        } , 400)
    })






    
    


})



    

    









