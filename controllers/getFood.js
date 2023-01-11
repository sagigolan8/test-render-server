exports.getFood = (req, res) => {
    const { food } = req.params;
    let result;
    switch (food) {
        case 'pizza':
            result = {
                cameFrom: 'Italy',
                bestBrand: 'Lacapuza',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCCX7KS3h-P5irfnlbo5AWLbg0qEEqo0fWA&usqp=CAU',
            }
            break;
        case 'burger':
            result = {
                cameFrom: 'Germany',
                bestBrand: 'GDB',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIzy4hLIPWl-HHeGSP-nxRknvLVyjj_3cjw&usqp=CAU',
            }
            break;
        case 'pasta':
            result = {
                cameFrom: 'Chaina',
                bestBrand: 'Barilla',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBPFCFas_31NMMBDOBSnxr5vKfmtEmQDHnw&usqp=CAU',
            }
            break;
        case 'sushi':
            result = {
                cameFrom: 'Japan',
                bestBrand: 'Japanika',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxHOt39nBul0qO_Quu5HXoCReyvU074Lelg&usqp=CAU',
            }

            break;
        case 'apple':
            result = {
                cameFrom: 'kazakhstan',
                bestBrand: 'Berashit',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQb4-vaunYs5sdwR3AmQMPW9amMHt2jQiGLg&usqp=CAU',
            }
            break;

        default:
            break;
    }
    res.send(result)
}