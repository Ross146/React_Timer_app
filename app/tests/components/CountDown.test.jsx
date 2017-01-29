var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown', () => {
    it('should exist', () => {
        expect(CountDown).toExist()
    });

    describe('handleSetCountDown', () => {
        it('should set state to started and countDown', (done) => {
            var countDown = TestUtils.renderIntoDocument(<CountDown/>);
            countDown.handleSetCountdown(10);

            expect(countDown.state.count).toBe(10);
            expect(countDown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countDown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should be less than zero', (done) => {
            var countDown = TestUtils.renderIntoDocument(<CountDown/>);
            countDown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countDown.state.count).toBe(0);
                done();
            }, 3001);
        })
    });
});