const UserCard = require("./UserCard")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new UserCard.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
