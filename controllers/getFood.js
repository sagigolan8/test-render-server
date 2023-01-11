exports.getFood = (req, res) => {
    const { food } = req.params;
    let result;
    switch (food) {
        case 'pizza':
            result = {
                cameFrom: 'Italy',
                topBrand: 'Lacapuza',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCCX7KS3h-P5irfnlbo5AWLbg0qEEqo0fWA&usqp=CAU',
            }
            break;
        case 'burger':
            result = {
                cameFrom: 'Germany',
                topBrand: 'GDB',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIzy4hLIPWl-HHeGSP-nxRknvLVyjj_3cjw&usqp=CAU',
            }
            break;
        case 'pasta':
            result = {
                cameFrom: 'Chaina',
                topBrand: 'Barilla',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBPFCFas_31NMMBDOBSnxr5vKfmtEmQDHnw&usqp=CAU',
            }
            break;
        case 'sushi':
            result = {
                cameFrom: 'Japan',
                topBrand: 'Japanika',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxHOt39nBul0qO_Quu5HXoCReyvU074Lelg&usqp=CAU',
            }

            break;
        case 'apple':
            result = {
                cameFrom: 'kazakhstan',
                topBrand: 'Berashit',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQb4-vaunYs5sdwR3AmQMPW9amMHt2jQiGLg&usqp=CAU',
            }
            break;
        default:
            result = "This Food not in the dictionary just yet."
            break;
    }
    res.send(result)
}