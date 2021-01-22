import assert from 'assert';
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../server.js';

const expect = chai.expect;

chai.use(chaihttp);

describe('User Signup', () => {
    describe('#user with incorrect values', () => {
        it('should not sign up user without an email', (done) => {
           const profileWithoutEmail = {
               email: '',
               password: 'jdjekekei',
               passwordConfirmation: 'ddeleeke'
           };

           chai.request(app)
            .post('/api/v1/user/signup')
            .send(profileWithoutEmail)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.errors[0].param).to.equal('email');
                expect(res.body.errors[0].msg).to.equal('Invalid value');
                done();
            });
        });

        it('should not sign up user without a password', (done) => {
            const profileWithoutPassword = {
                email: 'kitbk@ya.com',
                password: '',
                passwordConfirmation: 'ddeleeke'
            };
 
            chai.request(app)
             .post('/api/v1/user/signup')
             .send(profileWithoutPassword)
             .end((err, res) => {
                 expect(res).to.have.status(400);
                 expect(res.body.errors[0].param).to.equal('password');
                 expect(res.body.errors[0].msg).to.equal('Length of password is less than 6 characters');
                 done();
             });
        });

        it('should not sign up user without a password and email', (done) => {
            const profileWithoutPasswordAndEmail = {
                email: '',
                password: '',
                passwordConfirmation: 'ddeleeke'
            };
 
            chai.request(app)
             .post('/api/v1/user/signup')
             .send(profileWithoutPasswordAndEmail)
             .end((err, res) => {
                 expect(res).to.have.status(400);
                 expect(res.body.errors[0].param).to.equal('email');
                 expect(res.body.errors[0].msg).to.equal('Invalid value');
                 done();
            });
        });

        it('should not sign up user if password is less than 6 digits', (done) => {
            const profileWithLowPassword = {
                email: 'avb@yahoo.com',
                password: 'iekei',
                passwordConfirmation: 'ddeleeke'
            };
 
            chai.request(app)
             .post('/api/v1/user/signup')
             .send(profileWithLowPassword)
             .end((err, res) => {
                 expect(res).to.have.status(400);
                 expect(res.body.errors[0].param).to.equal('password');
                 expect(res.body.errors[0].msg).to.equal('Length of password is less than 6 characters');
                 done();
            });
        });

        it('should not sign up user if passwords do not match', (done) => {
            const profileWithLowPassword = {
                email: 'avb@yahoo.com',
                password: 'iekeieer',
                passwordConfirmation: 'ddeleeke'
            };
 
            chai.request(app)
             .post('/api/v1/user/signup')
             .send(profileWithLowPassword)
             .end((err, res) => {
                 expect(res).to.have.status(400);
                 expect(res.body.errors[0].param).to.equal('passwordConfirmation');
                 expect(res.body.errors[0].msg).to.equal('Password confirmation does not match password');
                 done();
            });
        });
    });

    describe('#user with correct input values', () => {
        it('should sign up user with email and password', (done) => {
            const profile = {
                email: 'didk@yhos.com',
                password: 'jdjekekei',
                passwordConfirmation: 'jdjekekei'
            };

            chai.request(app)
            .post('/api/v1/user/signup')
            .send(profile)
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
        });

        it('should not sign up existing user', (done) => {
            const profile = {
                email: 'didk@yhos.com',
                password: 'jdjekekei',
                passwordConfirmation: 'jdjekekei'
            };

            chai.request(app)
            .post('/api/v1/user/signup')
            .send(profile)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.errors[0].msg).to.equal('Email already in use');
                done();
            });
        });
    });
});
