const chai = require('chai'),
 assert = chai.assert,
 expect = chai.expect,
 should = chai.should()

 describe('basicTest', function () {
    describe('mathEquation', function () {
        it('Should equal 10 when 5 + 5', function () {
            var result = 5 + 5;
            assert.equal(result, 10);
        })
    });

    describe('check length of value', function () {
        it('Expecting the length to be 8', function () {
            var twitterMessage = "Falcons traded qb away";
            var lengthOfMessage = twitterMessage.length;
            assert.equal(lengthOfMessage, 22);
        });
    })

    describe('Strings', function () {
        let name = 'Jeff'
        it('should be of type string', function () {
            name.should.be.a('string')
            expect(name).to.be.a('string')
            assert.typeOf(name, 'string')  
        })
        
        it('Should contain Jeff', function () {
            name.should.not.equal('Rob')
            name.should.equal('Jeff')
            expect(name).to.equal('Jeff')
            assert.equal(name, 'Jeff')
        })
    });

    describe('Boolean', function () {
        it('Should be a Boolean', function () {
            expect(true).to.be.boolean();
            expect(false).to.be.boolean();
            var teaReady = true;
            var teaServed = false;
            assert.isBoolean(teaReady, 'Is the tea ready?');
            assert.isBoolean(teaServed, 'Has tea been served?');
        })
    });
    
    describe('Numeric', function () {
        it('Should be a numberical value', function () {
            let Numeric = 45
        })
    });

    describe('addarray', function () {
        it('should return the sum of an array', function() {
            expect(add([1,2,3,4,5])).to.equal(15);
        })
    });