var updateBtns = document.getElementsByClassName('update-cart')


// loops through all buttons
for (i=0;i < updateBtns.length; i++)
{
    updateBtns[i].addEventListener('click', function () //everytime button is clicked it runs this fucntion
    {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('proudctId;', productId, 'Action:', action)
        console.log('USER:', user)
        if(user === 'AnonymousUser' )
        {
            addCookieItem(productId, action)
        }
        else
        {
            updateUserOrder(productId, action)
        }
    })
}

function addCookieItem(productId, action){

    console.log('Not logged in..')
}



function updateUserOrder(productId,action)
{

    console.log('Not logged in')

    var url = '/update_item/'


    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId': productId, 'action':action})
    })


    .then((response) => {
        return response.json()
    })

     .then((data) => {
        console.log('date:',data)
         location.reload()
    })

}