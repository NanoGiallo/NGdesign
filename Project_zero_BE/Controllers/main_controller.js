const main = async (req, res, next) => {
    console.log('----------')
    let main
    try {
        main = { uno: 'uno', due: 'due'}
    } catch (error) {
        
    }

    res.status(200).json(main)
}

exports.main = main;