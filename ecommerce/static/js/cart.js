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
        if(user=== 'AnonoymouseUser' )
        {
            console.log('Not Logged In')
        }
        else
        {
            updateUserOrder(productId, action)
        }
    })
}


function updateUserOrder(productId,action)
{
    console.log('User is Logged in, sending Data..')

    var url = '/update_item/'
}