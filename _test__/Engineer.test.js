const Engineer = require ("../lib/enginner");

describe("Engineer", () => {
    it ('should create an engineer object',() =>{
        const engineer= new Engineer('Mike', 2, 'Mike1@gmail.com', 'mike1')
        expect(engineer.name).toEqual('Mike');
    })
});
describe('getUserName', () => {
    it('should return Github UserName', () => {
        const engineer= new Engineer('Mike', 2, 'Mike1@gmail.com', 'mike1')
        expect(engineer.getUserName()).toEqual('mike1');
        });
});
describe('getRole', () => {
    it('should return Engineer Role', () => {
        const engineer= new Engineer('Mike', 2, 'Mike1@gmail.com','mike1')
        expect(engineer.getRole()).toEqual('Engineer');
        });
 });









