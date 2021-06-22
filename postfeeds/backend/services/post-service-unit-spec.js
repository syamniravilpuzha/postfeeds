var sinon = require('sinon');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var fs = require('fs');
let postService;
describe('Test-Post Service', function () {
    before(function () {
        postService = require('./post-service');
        chai.use(chaiAsPromised);
        chai.should();
    });
    afterEach(() => {

        if (postService.readFile.restore) {
            postService.readFile.restore();
        }
        if (JSON.parse.restore) {
            JSON.parse.restore();
        }
        if (postService.getPostById.restore) {
            postService.getPostById.restore();
        }
        if (fs.readFile.restore) {
            fs.readFile.restore();
        }

    });
    it('should get all posts', function (done) {
        let expectedData = [{ 'id': '1', title: 'title', author: 'author', createdDate: "date" }, { id: '2', title: 'title', author: 'author', createdDate: "date" }];
        sinon.stub(postService, 'readFile').resolves(expectedData);
        sinon.stub(JSON, 'parse').returns(expectedData);
        postService.getAllPosts().then((data) => {
            chai.expect(data).to.eql(expectedData);
            done();
        });
    });
    it('should throw error when get all posts fails', function (done) {
        let expectedData = 'error';
        sinon.stub(postService, 'readFile').rejects(expectedData);
        sinon.stub(console, 'error');
        postService.getAllPosts().should.be.rejectedWith(expectedData);
        done();

    });
    it('should get post by id', function (done) {

        let data = [{ id: '1' }, { id: '2' }];
        let expectedData = { id: '1' };
        sinon.stub(postService, 'readFile').resolves(data);
        sinon.stub(JSON, 'parse').returns(data);
        postService.getPostById('1').then((data) => {
            chai.expect(data).to.eql(expectedData);
            done();
        });


    });
    it('should throw error when get post by id fails', function (done) {

        let val = [{ id: '1' }, { id: '2' }];
        let expectedData = 'error';
        sinon.stub(postService, 'readFile').rejects(expectedData);
        // sinon.stub(JSON,'parse').returns(data);
        postService.getPostById('1').should.be.rejectedWith(expectedData);
        done();


    });

    it('should get comments by post id', function (done) {

        let expectedData = { comments: ['comment1', 'comment2'] };
        sinon.stub(postService, 'getPostById').resolves(expectedData);
        postService.getCommentsByPostId(1).then((data) => {
            chai.expect(data).to.eql(expectedData.comments);
            done();
        });

    });
    it('should throw error when get comments by post id fails', function (done) {

        let expectedData = 'error';
        sinon.stub(postService, 'getPostById').rejects(expectedData);
        postService.getCommentsByPostId(1).should.be.rejectedWith(expectedData);
        done();

    });

    it('should read file', function (done) {

        let expectedData = 'some data';
        sinon.stub(fs, 'readFile').yields(null, expectedData);
        postService.readFile().then((data) => {
            chai.expect(data).to.eql(expectedData);
            done();
        });
    });
    it('should throw error when read file fails', function (done) {

        let expectedData = 'error';
        sinon.stub(fs, 'readFile').yields(expectedData, null);
        postService.readFile().should.be.rejectedWith(expectedData);
        done();
    });
})