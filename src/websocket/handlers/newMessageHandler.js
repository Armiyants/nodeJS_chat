module.exports = (io,) => {
    return async (messageBody) => {
        // try {
        //     var message = new Message(messageBody)
        //
        //     var savedMessage = await message.save()
        //     console.log('saved')
        //
        //     var censored = await Message.findOne({message: 'badword'})
        //     if (censored)
        //         await Message.deleteMany({_id: censored.id})
        //     else
        //         io.emit('message', messageBody)
        //
        // } catch (err) {
        //     console.error(err)
        // }
    }
}