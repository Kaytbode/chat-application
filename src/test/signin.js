import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../server.js';

const expect = chai.expect;

chai.use(chaihttp);

describe('User Signin', () => {
    describe('#user with incorrect values', () => {
        // Ensures there is an entry in the database
        // ------------------------------------------------
        // Not part of the test.... 
        it('', (done) => {
            const profile = {
                email: 'didka@yhos.com',
                password: 'jdjekekei',
                passwordConfirmation: 'jdjekekei'
            };

            chai.request(app)
            .post('/api/v1/user/signup')
            .send(profile)
            .end((err, res) => {
                done();
            });
        });
       // -------------------------------------------------------
        it('should not sign in user without an email', (done) => {
           const profileWithoutEmail = {
               email: '',
               password: 'jdjekekei'
           };

           chai.request(app)
            .post('/api/v1/user/signin')
            .send(profileWithoutEmail)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.errors[0].param).to.equal('email');
                expect(res.body.errors[0].msg).to.equal('Invalid value');
                done();
            });
        });

        it('should not sign in user without a password', (done) => {
            const profileWithoutPassword = {
                email: 'didka@yhos.com',
                password: ''
            };
 
            chai.request(app)
             .post('/api/v1/user/signin')
             .send(profileWithoutPassword)
             .end((err, res) => {
                 expect(res).to.have.status(400);
                 expect(res.body.errors[0].param).to.equal('password');
                 expect(res.body.errors[0].msg).to.equal('Length of password is less than 6 characters');
                 done();
             });
        });

        it('should not sign in user without a password and email', (done) => {
            const profileWithoutPasswordAndEmail = {
                email: '',
                password: ''
            };
 
            chai.request(app)
             .post('/api/v1/user/signin')
             .send(profileWithoutPasswordAndEmail)
             .end((err, res) => {
                 expect(res).to.have.status(400);
                 expect(res.body.errors[0].param).to.equal('email');
                 expect(res.body.errors[0].msg).to.equal('Invalid value');
                 done();
            });
        });

        it('should not sign in user with wrong password', (done) => {
            const profileWithWrongPassword = {
                email: 'didka@yhos.com',
                password: 'iekeij'
            };
 
            chai.request(app)
             .post('/api/v1/user/signin')
             .send(profileWithWrongPassword)
             .end((err, res) => {
                 expect(res).to.have.status(403);
                 expect(res.body.message).to.equal('Password is incorrect');
                 done();
            });
        });
    });

    describe('#user with correct input values', () => {
        it('should sign in user with email and correct password', (done) => {
            const profile = {
                email: 'didka@yhos.com',
                password: 'jdjekekei'
            };

            chai.request(app)
            .post('/api/v1/user/signin')
            .send(profile)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.accessToken).to.be.a('string');
                done();
            });
        });
    });
});
